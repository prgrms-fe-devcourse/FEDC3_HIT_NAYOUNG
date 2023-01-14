import React from 'react';

type ButtonType = {
  name: string;
  type?: 'button' | 'submit' | 'reset';
  style: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ name, style, type, clickHandler }: ButtonType) => {
  // TODO: clickHandler에서, 로직하는 동안 로딩 컴포넌트 만들어서 연결하기
  return (
    <button className={style} type={type || 'button'} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default Button;
