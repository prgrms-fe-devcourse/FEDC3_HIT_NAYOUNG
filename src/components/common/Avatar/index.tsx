import defaultProfileImage from '@/assets/defaultProfileImage.png';

type AvatarProps = {
  size: number;
  image?: string;
  style?: string;
};

const Avatar = ({ image, size, style }: AvatarProps) => {
  return (
    <div className={`avatar ${style}`}>
      <div className={`w-${size} rounded-full`}>
        <img src={image || defaultProfileImage} />
      </div>
    </div>
  );
};

export default Avatar;
