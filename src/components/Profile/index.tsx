import { User } from '@/types';
import { useEffect, useState } from 'react';
import { checkAuthUser, getUserId } from '@/Api/user';
import { EDIT_MY_PAGE } from '@/utils/constants';
import { useSetRecoilState } from 'recoil';
import { informLogOutModalState } from '@/store/recoilModalState';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar';
import ReviewAndFollow from './ReviewAndFollow';
import ReviewList from './ReviewList';
import Button from '../ReviewCreateForm/Button';

const Profile = () => {
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  const onHandlerLogout = () => {
    (async () => {
      const isLogIn = await checkAuthUser();
      if (isLogIn) setLogOutModalOpened(true);
    })();
  };
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userIdData = async () => {
      const data = await getUserId();
      setUser(data);
    };
    userIdData();
  }, []);

  if (!user) return <div>로그인 유저 토큰이 없습니다!</div>;
  return (
    <div className="max-w-xl w-full my-0 mx-auto">
      <div className="flex flex-col items-center">
        <Avatar image={user.image} size={36} style="mt-10" />
        <div className="text-2xl mt-5">{user.fullName}</div>
        <Link to={EDIT_MY_PAGE}>
          <button className="btn w-2/5 min-w-[300px] mt-5 bg-white text-BASE border-BASE hover:text-white hover:bg-HOVER hover:border-HOVER">
            프로필 편집
          </button>
        </Link>
        <div>
          <Button
            name={'로그아웃'}
            style={
              'btn w-2/5 min-w-[300px] mt-5 bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER'
            }
            clickHandler={onHandlerLogout}
          />
        </div>
        <ReviewAndFollow user={user} />
        <ReviewList user={user} />
      </div>
    </div>
  );
};

export default Profile;
