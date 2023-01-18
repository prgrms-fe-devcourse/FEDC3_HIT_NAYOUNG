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
import Avatar from '../common/Avatar';
import ReviewAndFollow from './ReviewAndFollow';
import ReviewItem from './ReviewItem';
import ProfileBottom from './ProfileBottom';

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
        <Avatar user={user} size={36} />
        <div>{user.fullName}</div>
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
        <ReviewAndFollow user={user} />
        <ProfileBottom user={user} />
      </div>
    </div>
  );
};

export default Profile;
