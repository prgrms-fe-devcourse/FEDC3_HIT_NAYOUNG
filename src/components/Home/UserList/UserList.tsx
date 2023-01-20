import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOGIN_TOKEN, MY_PAGE } from '@/utils/constants';

import { getUserInformation, getUserNameList } from '@/Api/user';

import { BiUserCircle } from 'react-icons/bi';
import { UserItem } from './UserItem';
import { getLocalStorage } from '@/utils/storage';

type UserNameListProps = {
  name: string;
  id: string;
};

type UserNameList = UserNameListProps[];

const UserList = () => {
  const navigate = useNavigate();

  const [myName, setMyName] = useState();
  const [authState, setAuthState] = useState(false);
  const [userNameList, setUserNameList] = useState<UserNameList>();

  const moveMyProfile = useCallback(() => {
    navigate(MY_PAGE);
  }, []);

  useEffect(() => {
    (async () => {
      const isLogIn = getLocalStorage(LOGIN_TOKEN);

      if (isLogIn) setAuthState(true);
      else setAuthState(false);
    })();

    const callGetUserInformation = async () => {
      const response = await getUserInformation();
      setMyName(response.fullName);
    };

    const callGetUserNameList = async () => {
      const userNameList = await getUserNameList();
      setUserNameList(userNameList);
    };

    callGetUserInformation();
    callGetUserNameList();
  }, []);

  if (authState)
    return (
      <div className="w-48 border border-BASE rounded-md shadow-sm pb-1">
        <div
          className="flex hover:bg-slate-50 cursor-pointer mt-1 p-1 px-2"
          onClick={moveMyProfile}
        >
          <BiUserCircle size={24} className="mr-1" />
          <div className="ml-1">{myName}</div>
        </div>
        <div className="border border-t-BASE border-b-white mt-1"></div>
        {userNameList &&
          userNameList.map((user: UserNameListProps) => {
            return <UserItem userName={user.name} id={user.id} key={user.id} />;
          })}
      </div>
    );
  return <></>;
};

export default UserList;
