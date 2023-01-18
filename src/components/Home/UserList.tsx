import { getUserInformation, getUserNameList } from '@/Api/user';
import { USER_PAGE } from '@/utils/constants';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UserNameListProps = {
  name: string;
  id: string;
};

type UserNameList = UserNameListProps[];

type UserComponentProps = {
  userName: string;
  id: string;
};

const UserComponent = ({ userName, id }: UserComponentProps) => {
  const navigate = useNavigate();

  const moveUserProfile = () => {
    navigate(USER_PAGE, { state: id });
  };

  return (
    <div
      className="flex justify-between hover:bg-slate-50 cursor-pointer mt-1 p-2 py-1"
      key={id}
      onClick={moveUserProfile}
    >
      <BiUserCircle size={24} className="mr-1" />
      <div className="text-sm mt-0.5">{userName}</div>
      <IoIosArrowForward size={24} className="pl-1" />
    </div>
  );
};

const UserList = () => {
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

  return (
    <div className="w-48 border border-BASE rounded-md shadow-sm pb-1">
      <div className="flex hover:bg-slate-50 cursor-pointer mt-1 p-1 px-2 ">
        <BiUserCircle size={24} className="mr-1" />
        <div className="ml-1">{myName}</div>
      </div>
      <div className="border border-t-BASE border-b-white mt-1"></div>
      {userNameList &&
        userNameList.map((user: UserNameListProps) => {
          return <UserComponent userName={user.name} id={user.id} key={user.id} />;
        })}
    </div>
  );
};

export default UserList;
