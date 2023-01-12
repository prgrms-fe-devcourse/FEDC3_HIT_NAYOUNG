type logo = {
  logoText: string;
};

const Logo = ({ logoText }: logo) => {
  return (
    <div>
      <div className="box-border rounded-lg h-20 w-20 bg-[#FFC7C7] flex items-center justify-center">
        <div className="text-white text-3xl">HIT</div>
      </div>
      <div className="text-2xl">{logoText}</div>
    </div>
  );
};

export default Logo;
