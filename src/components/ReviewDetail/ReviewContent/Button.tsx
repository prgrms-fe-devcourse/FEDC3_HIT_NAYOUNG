import React from 'react';

type ContentButtonType = {
  childrenIcon: React.ReactNode;
  tooltipText: string;
  page: 'userPage' | 'reviewUpdate' | 'reviewDelete';
  onMovePage: (page: 'userPage' | 'reviewUpdate' | 'reviewDelete') => void;
};

const Button = ({ childrenIcon, tooltipText, page, onMovePage }: ContentButtonType) => {
  return (
    <span
      onClick={() => onMovePage(page)}
      className="hover:cursor-pointer tooltip tooltip-bottom"
      data-tip={`${tooltipText}`}
    >
      {childrenIcon}
    </span>
  );
};

export default Button;
