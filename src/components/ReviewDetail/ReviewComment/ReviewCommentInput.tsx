import { callCreateCommentAPI } from '@/Api/comment';
import { callCreateNotificationAPI } from '@/Api/notification';
import { commentState } from '@/store/recoilCommentState';
import { reviewDetailState } from '@/store/recoilReviewDetailState';
import { COMMENT } from '@/utils/constants';
import { useState, useEffect } from 'react';
import { BsChat } from 'react-icons/bs';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type ReviewCommentInputProps = {
  postId: string;
};

const ReviewCommentInput = ({ postId }: ReviewCommentInputProps) => {
  const setCreatedComment = useSetRecoilState(commentState);
  const { author } = useRecoilValue(reviewDetailState);
  const [comment, setComment] = useState('');
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (comment.trim() !== '') setIsCommentEmpty(false);
    else setIsCommentEmpty(true);
  }, [comment]);

  const callCreateCommentAPIBody = {
    postId,
    comment,
  };

  const onCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await callCreateCommentAPI(callCreateCommentAPIBody);

    setCreatedComment(data);

    if (data.user !== author._id) {
      const callCreateNotificationAPIBody = {
        notificationType: COMMENT,
        notificationTypeId: data._id,
        userId: author._id,
        postId: data.post,
      };
      await callCreateNotificationAPI(callCreateNotificationAPIBody);
    }
    setComment('');
  };

  return (
    <form onSubmit={(e) => onCreateComment(e)}>
      <div className="w-full flex justify-between items-center gap-6 px-6 mb-4">
        <span>
          <BsChat className="text-xl" />
        </span>
        <input
          type="text"
          placeholder="댓글을 입력해주세요."
          className="input input-bordered w-full flex-1"
          value={comment}
          onChange={(e) => onChangeInput(e)}
        />
        <button
          disabled={isCommentEmpty}
          className={isCommentEmpty ? 'text-GRAY_200' : 'text-HOVER'}
          type="submit"
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default ReviewCommentInput;
