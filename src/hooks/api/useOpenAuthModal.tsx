import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { informLoginModalState, informLogOutModalState } from '@/store/recoilModalState';

import { checkAuthUser } from '@/Api/user';
import React from 'react';

const useOpenAuthModal = (pathname: string, options: { [key: string]: any }) => {
  const navigate = useNavigate();
  const setLogInModalOpened = useSetRecoilState(informLoginModalState);
  const setLogOutModalOpened = useSetRecoilState(informLogOutModalState);

  // useCallback으로 감싸야할까?
  // T 제네릭을 공통 이벤트 타입으로 바꾸고 싶은데 방법이 뭘까?
  // todo 중복 로직이 발생한다. 리팩토링을 진행해야 한다.
  const onOpenLogInModal = <T extends React.MouseEvent<HTMLAnchorElement>>(e: T) => {
    e.preventDefault();

    (async () => {
      const isLogIn = await checkAuthUser();
      if (!isLogIn) {
        setLogInModalOpened(true);
      }

      if (isLogIn) {
        navigate(pathname, options);
      }
    })();
  };

  const onOpenLogOutModal = () => {
    (async () => {
      const isLogIn = await checkAuthUser();

      if (isLogIn) setLogOutModalOpened(true);
    })();
  };

  return { onOpenLogInModal, onOpenLogOutModal };
};

export default useOpenAuthModal;
