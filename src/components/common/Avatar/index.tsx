import { User } from '@/types';

type AvatarProps = {
  size: number;
  user: User;
};

const Avatar = ({ user, size }: AvatarProps) => {
  return (
    <div className="avatar mt-10">
      <div className={`w-${size} rounded-full`}>
        <img src={user?.image || 'https://placeimg.com/200/200/arch'} />
      </div>
    </div>
  );
};

export default Avatar;
