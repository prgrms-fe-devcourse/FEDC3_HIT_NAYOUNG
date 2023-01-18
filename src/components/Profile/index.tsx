import { UserDataProps } from '@/types';
import { useEffect, useState } from 'react';
import { checkAuthUser, getUserId } from '@/Api/user';
import { EDIT_MY_PAGE } from '@/utils/constants';
import { useSetRecoilState } from 'recoil';
import { informLogOutModalState } from '@/store/store';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import ReviewAndFollow from './ReviewAndFollow';
import ReviewList from './ReviewList';

const Profile = () => {
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  const onHandlerLogout = () => {
    (async () => {
      const isLogIn = await checkAuthUser();
      if (isLogIn) setLogOutModalOpened(true);
    })();
  };
  const [user, setUser] = useState<UserDataProps>();

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
        <ReviewList user={user} />
      </div>
    </div>
  );
};

export default Profile;
