import { CommentType, LikeProps } from '@/types';
import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

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

// 댓글 생성
export const createCommentState = atom<CommentType | null>({
  key: 'createCommentState',
  default: null,
});

// 좋아요 (postId, likes)
export const likePropState = atom<LikeProps | null>({
  key: 'likePropState',
  default: null,
});
