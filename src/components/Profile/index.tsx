import { UserDataProps } from '@/types';
import { ReactNode, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { checkAuthUser, getUserId } from '@/Api/user';
import { EDIT_MY_PAGE } from '@/utils/constants';
import { useSetRecoilState } from 'recoil';
import { informLogOutModalState } from '@/store/store';
import { Link, useLocation } from 'react-router-dom';
import Figure from './Figure';

// profile과 OpponentProfile이 유사함 -> 컴포넌트 새로 만들어서 다시 짜기
const Profile = () => {
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  const onHandlerLogout = () => {
    (async () => {
      const isLogIn = await checkAuthUser();
      if (isLogIn) setLogOutModalOpened(true);
    })();
  };
  const [user, setUser] = useState<UserDataProps>();
  const { pathname } = useLocation();

  // localstorage getItem 할 것
  const categoryName = [
    {
      name: '노트북',
      id: '63bd045193836272216d31bc',
    },
    {
      name: '키보드',
      id: '63bd140193836272216d323e',
    },
    {
      name: '휴대폰',
      id: '63bd140b93836272216d3242',
    },
    {
      name: '모니터',
      id: '63bd141693836272216d3246',
    },
    {
      name: '오디오',
      id: '63bd141d93836272216d324a',
    },
    {
      name: '시계',
      id: '63bd143493836272216d324e',
    },
  ];

  useEffect(() => {
    const userIdData = async () => {
      const data = await getUserId();
      setUser(data);
    };
    userIdData();
  }, []);

  if (!user) return false;
  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      <div className="flex flex-col items-center">
        <div className="avatar mt-10">
          <div className={`w-${36} rounded-full`}>
            <img src={user.image ? user.image : 'https://placeimg.com/200/200/arch'} />
          </div>
        </div>
        <div>{user?.fullName}</div>
        <div>안녕하세요 월 수화 목금입니다.</div>
        <Link to={EDIT_MY_PAGE}>
          <button className="btn w-2/5 min-w-[300px] mt-5 bg-white text-BASE border-BASE hover:text-white hover:bg-HOVER hover:border-HOVER">
            프로필 편집
          </button>
        </Link>
        <div>
          <button
            className="btn w-2/5 min-w-[300px] mt-5 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
            onClick={onHandlerLogout}
          >
            로그아웃
          </button>
        </div>
        <div className="mt-10">
          <ul className="flex justify-around text-center min-w-[300px]">
            <li className="cursor-pointer">
              <div>게시물</div>
              <div>{user.posts.length}</div>
            </li>
            <li className="cursor-pointer">
              <div>팔로워</div>
              <div>{user.followers.length}</div>
            </li>
            <li className="cursor-pointer">
              <div>팔로잉</div>
              <div>{user.following.length}</div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5 max-w-xl">
          {user?.posts.length === 0 ? (
            <div className="mt-10 col-start-2">
              <div>작성하신 리뷰가 없습니다.</div>
            </div>
          ) : (
            user.posts.map((post): ReactNode => {
              const id = post._id;
              const channel = categoryName.filter(
                (category) => category.id === post.channel
              );
              const categoryPathName = `category/${channel[0]?.name}`;
              return (
                <Link
                  key={post._id}
                  className="h-40 border-HOVER cursor-pointer relative overflow-hidden"
                  to={`/${categoryPathName}/detail`}
                  state={{ id }}
                >
                  {post.image ? (
                    <Figure>
                      <img
                        className="object-fill object-center w-52 h-52"
                        src={post.image}
                      />
                      <figcaption className="flex items-center justify-around">
                        <div className="flex gap-2 items-center">
                          <AiFillHeart />
                          {post.likes.length}
                        </div>
                        <div className="flex gap-2 items-center">
                          <FaComment /> {post.comments.length}
                        </div>
                      </figcaption>
                    </Figure>
                  ) : (
                    <Figure>
                      <img
                        className="object-cover"
                        src="https://cdn-icons-png.flaticon.com/512/261/261283.png"
                      />
                      <figcaption className="flex items-center justify-around">
                        <div className="flex gap-2 items-center">
                          <AiFillHeart />
                          {post.likes.length}
                        </div>
                        <div className="flex gap-2 items-center">
                          <FaComment /> {post.comments.length}
                        </div>
                      </figcaption>
                    </Figure>
                  )}
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
