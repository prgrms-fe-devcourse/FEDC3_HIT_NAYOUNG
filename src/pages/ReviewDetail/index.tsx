import ReviewCommentInput from '@/components/ReviewDetail/ReviewComment/ReviewCommentInput';
import ReviewCommentList from '@/components/ReviewDetail/ReviewComment/ReviewCommentList';
import ReviewContent from '@/components/ReviewDetail/ReviewContent';
import { callGetReviewDetailAPI } from '@/Api/reviewDetail';
import { commentState } from '@/store/recoilCommentState';
import { likeState } from '@/store/recoilLikeState';
import { reviewDetailState } from '@/store/recoilReviewDetailState';
import { InformLogOutModal } from '@/components/Modal';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getUserId } from '@/Api/user';
import { ReviewContentType } from '@/types';

const ReviewDetail = () => {
  const {
    state: { id },
  } = useLocation();

  const [reviewContent, setReviewContent] = useState<ReviewContentType>();

  // 댓글 관련 state
  const [commentList, setCommentList] = useState();
  const createdComment = useRecoilValue(commentState);

  // 상세페이지 데이터 2depth이상 전역 상태 관리
  const setReviewContentHandler = useSetRecoilState(reviewDetailState);

  // 좋아요 state 부모로 전달
  const setLikeState = useSetRecoilState(likeState);

  useEffect(() => {
    const getReviewDetail = async () => {
      try {
        const data = await callGetReviewDetailAPI(id);
        const user = await getUserId();

        setReviewContent(data);
        setCommentList(data.comments);
        setReviewContentHandler({
          userId: user._id,
          author: data.author,
          title: data.title,
          image: data.image,
          createdAt: data.createdAt,
          channel: data.channel,
        });
        setLikeState({ likes: data.likes, id });
      } catch (error) {
        console.log(error);
      }
    };
    getReviewDetail();
  }, [createdComment]);

  return (
    <div className="max-w-xl w-full my-0 mx-auto h-full px-8 pt-8">
      {reviewContent && (
        <>
          <ReviewContent title={reviewContent.title} image={reviewContent.image} />
          <ReviewCommentInput postId={id} />
          {commentList && <ReviewCommentList commentList={commentList} />}
        </>
      )}
      <InformLogOutModal />
    </div>
  );
};

export default ReviewDetail;
