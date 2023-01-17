import api from '@/Api/api';
import { InformLogOutModal } from '@/components/Modal';
import ReviewCommentInput from '@/components/ReviewComment/ReviewCommentInput';
import ReviewCommentList from '@/components/ReviewComment/ReviewCommentList';
import ReviewContent from '@/components/ReviewContent';
import { createCommentState, likePropState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type ReviewContentType = {
  author: {
    fullName: string;
  };
  title: string;
  image: string;
  channel: {
    name: string;
  };
  createdAt: string;
};

const ReviewDetail = () => {
  const {
    state: { id },
  } = useLocation();

  const [reviewContent, setReviewContent] = useState<ReviewContentType>();
  const [commentList, setCommentList] = useState();
  const createComment = useRecoilValue(createCommentState);
  const setLikeState = useSetRecoilState(likePropState);

  useEffect(() => {
    const getReviewDetail = async () => {
      try {
        const { data } = await api.get(`/posts/${id}`);

        setReviewContent(data);
        setCommentList(data.comments);
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
            author={reviewContent.author.fullName}
            title={reviewContent.title}
            imageUrl={reviewContent.image}
            category={reviewContent.channel.name}
            createdAt={reviewContent.createdAt}
          />
          <ReviewCommentInput postId={id} />
          {commentList && <ReviewCommentList commentList={commentList} />}
        </>
      )}
      <InformLogOutModal />
    </div>
  );
};

export default ReviewDetail;
