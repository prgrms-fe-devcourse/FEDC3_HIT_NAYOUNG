import { useNavigate } from 'react-router-dom';

import { USER_PAGE } from '@/utils/constants';

import { getOpponentUserId } from '@/Api/user';

import { IoIosArrowForward } from 'react-icons/io';
import Avatar from '@/components/common/Avatar';
import { useEffect, useState } from 'react';

type UserComponentProps = {
  userName: string;
  id: string;
};

export const UserItem = ({ userName, id }: UserComponentProps) => {
  const navigate = useNavigate();

  const [image, setImage] = useState();

  const moveUserProfile = () => {
    navigate(USER_PAGE, { state: { id: id } });
  };

  useEffect(() => {
    const getUserImage = async () => {
      const { image } = await getOpponentUserId(id);
      setImage(image);
    };
    getUserImage();
  }, []);

  return (
    <div
      className="flex justify-between hover:bg-slate-50 cursor-pointer mt-1 p-2 py-1"
      key={id}
      onClick={moveUserProfile}
    >
      <Avatar size={24} style={'w-6 h-6'} image={image} />
      <div className="text-sm mt-0.5">{userName}</div>
      <IoIosArrowForward size={24} className="pl-1" />
    </div>
  );
};
