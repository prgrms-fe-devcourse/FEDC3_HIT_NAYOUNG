import { Like } from '@/types';

// 로그인한 유저가 해당 게시글 좋아요 눌렀는지 true, false 반환
export const isCheckedLike = (likePropState: Like[], userId: string) => {
  let isChecked = false;
  let likeId = '';

  likePropState.some((like) => {
    isChecked = like.user === userId;
    likeId = like._id;
  });

  return { isChecked, likeId } as const;
};
