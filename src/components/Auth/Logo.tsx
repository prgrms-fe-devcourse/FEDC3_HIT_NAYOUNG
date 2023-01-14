type LogoProps = {
  logoText: string;
};

const Logo = ({ logoText }: LogoProps) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="box-border rounded-lg h-20 w-20 bg-BASE flex items-center justify-center">
          <div className="text-white text-3xl">HIT</div>
        </div>
      </div>
      <div className="text-2xl mt-0.5">{logoText}</div>
    </div>
  );
};

export default Logo;
