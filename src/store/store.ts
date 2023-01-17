import { Comment, LikeProps, ReviewContentProps } from '@/types';
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

// 댓글 생성
export const createCommentState = atom<Comment | null>({
  key: 'createCommentState',
  default: null,
});

// 좋아요 (postId, likes)
export const likePropState = atom<LikeProps | null>({
  key: 'likePropState',
  default: null,
});

// BreadCrumb, ReviewHandler에서 사용
// 2depth 이상으로 내려가서 전역으로 관리합니다. @chunwookJoo
export const reviewContentState = atom<ReviewContentProps>({
  key: 'reviewContentState',
  default: {
    userId: '',
    author: {
      _id: '',
      fullName: '',
      image: '',
    },
    title: '',
    image: '',
    createdAt: '',
    channel: {
      name: '',
      _id: '',
    },
  },
});
