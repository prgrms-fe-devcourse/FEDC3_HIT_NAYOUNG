import { atom } from 'recoil';

// 로그인 안내 모달창
export const informLoginModalState = atom<boolean>({
  key: 'informLoginModalState',
  default: false,
});

// 로그아웃 확인 모달창
export const informLogOutModalState = atom<boolean>({
  key: 'informLogOutModalState',
  default: false,
});

// 댓글 삭제 확인 모달창
export const confirmDeleteCommentModalState = atom<boolean>({
  key: 'confirmDeleteCommentModalState',
  default: false,
});

// 리뷰 삭제 확인 모달창
export const confirmDeleteReviewModalState = atom<boolean>({
  key: 'confirmDeleteReviewModalState',
  default: false,
});
