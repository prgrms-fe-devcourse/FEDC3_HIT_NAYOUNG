import styled from '@emotion/styled';

type button = {
  buttonText: string;
};

const Button = ({ buttonText }: button) => {
  return (
    <div>
      <button className="btn w-80 bg-[#FFC7C7] border-[#FFC7C7] ">{buttonText}</button>
    </div>
  );
};

export default Button;
