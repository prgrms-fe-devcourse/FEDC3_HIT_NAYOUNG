import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MY_PAGE } from '@/utils/constants';

import { getUserInformation, getUserNameList } from '@/Api/user';

import { BiUserCircle } from 'react-icons/bi';
import { UserItem } from './UserItem';

type UserNameListProps = {
  name: string;
  id: string;
};

type UserNameList = UserNameListProps[];

const UserList = () => {
  const navigate = useNavigate();

  const [myName, setMyName] = useState();
  const [userNameList, setUserNameList] = useState<UserNameList>();

  useEffect(() => {
    const callGetUserInformation = async () => {
      const response = await getUserInformation();
      setMyName(response.fullName);
    };

    const callgetUserNameList = async () => {
      const userNameList = await getUserNameList();
      setUserNameList(userNameList);
    };

    callGetUserInformation();
    callgetUserNameList();
  }, []);

  const moveMyProfile = useCallback(() => {
    navigate(MY_PAGE);
  }, []);

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
};

export default UserList;
