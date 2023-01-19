import { atom } from 'recoil';

// 댓글 생성
export const commentState = atom<Comment | null>({
  key: 'commentState',
  default: null,
});

// 댓글 삭제
export const commentDeleteState = atom<boolean>({
  key: 'commentDeleteState',
  default: false,
});
