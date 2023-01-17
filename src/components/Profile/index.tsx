import { Post } from '@/types';
import styled from '@emotion/styled';
import { ReactNode, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { checkAuthUser, getUserId } from '@/Api/user';
import { EDIT_MY_PAGE } from '@/utils/constants';
import { useSetRecoilState } from 'recoil';
import { informLogOutModalState } from '@/store/store';

type UserData = {
  fullName: string;
  image: string;
  posts: Post[];
  followers: [];
  following: [];
};

const Figure = styled.figure`
  figcaption {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 0;
    transition: 0.3 ease-out;

    &:hover {
      opacity: 1;
    }
  }
`;

const Profile = () => {
  const [user, setUser] = useState<UserData>();
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  const onHandlerLogout = () => {
    (async () => {
      const isLogIn = await checkAuthUser();
      if (isLogIn) setLogOutModalOpened(true);
    })();
  };

  useEffect(() => {
    const userIdData = async () => {
      const data = await getUserId();
      setUser(data);
    };
    userIdData();
  }, []);

  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      {user && (
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
          <div className="flex flex-wrap justify-center max-w-xl">
            {user?.posts.length === 0 ? (
              <div className="mt-10 col-start-2">
                <div>작성하신 리뷰가 없습니다.</div>
              </div>
            ) : (
              user.posts.map((post): ReactNode => {
                return (
                  <div
                    key={post._id}
                    className="w-1/3 h-40 border-HOVER cursor-pointer relative overflow-hidden"
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
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
