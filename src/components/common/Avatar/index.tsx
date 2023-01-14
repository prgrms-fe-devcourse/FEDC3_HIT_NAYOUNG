import api from '@/Api/api';
import { Post } from '@/types';
import { useEffect, useState } from 'react';

type AvatarSizeProp = {
  size: number;
};

// index.d.ts로 옮겨야 할듯
type UserData = {
  fullName: string;
  image: string;
  posts: Post[];
  followers: [];
  following: [];
};

const Avatar = ({ size }: AvatarSizeProp) => {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    // 특정 사용자 정보 불러오는 로직
    // 사용자 userId를 불러오는 로직 만들어야할 듯
  }, []);

  return (
    <div className="avatar mt-10">
      <div className={`w-${size} rounded-full`}>
        <img src={user?.image ? user?.image : 'https://placeimg.com/200/200/arch'} />
      </div>
    </div>
  );
};

export default Avatar;
