import ReviewCommentInput from '@/components/ReviewDetail/ReviewComment/ReviewCommentInput';
import ReviewCommentList from '@/components/ReviewDetail/ReviewComment/ReviewCommentList';
import ReviewContent from '@/components/ReviewDetail/ReviewContent';
import { callGetReviewDetailAPI } from '@/Api/reviewDetail';
import { breadCrumbState, createCommentState, likePropState } from '@/store/store';
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
  const [userId, setUserId] = useState('');

  // 댓글 관련 state
  const [commentList, setCommentList] = useState();
  const createComment = useRecoilValue(createCommentState);

  // breadCrumb (channelId, category)
  const breadCrumbIdCategoryState = useSetRecoilState(breadCrumbState);

  // 좋아요 state 부모로 전달
  const setLikeState = useSetRecoilState(likePropState);

  useEffect(() => {
    const getReviewDetail = async () => {
      try {
        const data = await callGetReviewDetailAPI(id);
        const user = await getUserId();
        console.log(data);
        console.log(user);

        setUserId(user._id);
        setReviewContent(data);
        setCommentList(data.comments);
        breadCrumbIdCategoryState({
          channelId: data.channel._id,
          category: data.channel.name,
        });
        setLikeState({ likes: data.likes, id });
      } catch (error) {
        console.log(error);
      }
    };
    getReviewDetail();
  }, [createComment]);

  return (
    <div className="max-w-xl w-full my-0 mx-auto h-full px-8 pt-8">
      {reviewContent && (
        <>
          <ReviewContent
            userId={userId}
            author={reviewContent.author}
            title={reviewContent.title}
            image={reviewContent.image}
            createdAt={reviewContent.createdAt}
          />
          <ReviewCommentInput postId={id} />
          {commentList && <ReviewCommentList commentList={commentList} />}
        </>
      )}
    </div>
  );
};

export default ReviewDetail;
