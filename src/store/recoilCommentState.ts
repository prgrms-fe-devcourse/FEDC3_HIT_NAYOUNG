import { atom } from 'recoil';

// 댓글 생성
export const commentState = atom<Comment | null>({
  key: 'commentState',
  default: null,
});
