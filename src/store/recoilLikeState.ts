import { LikeProps } from '@/types';
import { atom } from 'recoil';

// 좋아요 (postId, likes)
export const likeState = atom<LikeProps>({
  key: 'likeState',
  default: {
    id: '',
    likes: [],
  },
});
