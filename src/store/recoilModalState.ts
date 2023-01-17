import { atom } from 'recoil';

// 로그인 안내 모달창
export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
