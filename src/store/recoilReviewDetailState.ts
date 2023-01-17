import { ReviewContentProps } from '@/types';
import { atom } from 'recoil';

// BreadCrumb, ReviewHandler에서 사용
// 2depth 이상으로 내려가서 전역으로 관리합니다. @chunwookJoo
export const reviewDetailState = atom<ReviewContentProps>({
  key: 'reviewDetailState',
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
