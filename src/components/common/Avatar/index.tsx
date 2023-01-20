type AvatarProps = {
  size: number;
  image?: string;
  style?: string;
};

const Avatar = ({ image, size, style }: AvatarProps) => {
  return (
    <div className={`avatar ${style}`}>
      <div className={`w-${size} rounded-full`}>
        <img src={image || 'https://placeimg.com/200/200/arch'} />
      </div>
    </div>
  );
};

export default Avatar;
