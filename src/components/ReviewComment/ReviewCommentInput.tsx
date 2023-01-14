import api from '@/Api/api';
import { createCommentState } from '@/store/store';
import { useState, useEffect } from 'react';
import { BsChat } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';

type ReviewCommentInputProps = {
  postId: string;
};

const ReviewCommentInput = ({ postId }: ReviewCommentInputProps) => {
  const setCreateComment = useSetRecoilState(createCommentState);
  const [comment, setComment] = useState('');
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);
  const loginToken = localStorage.getItem('login-token');

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

  const callCreateCommentAPI = async () => {
    try {
      const { data } = await api.post('/comments/create', callCreateCommentAPIBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${loginToken}`,
        },
      });
      setCreateComment(data);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        onClick={callCreateCommentAPI}
      >
        등록
      </button>
    </div>
  );
};

export default ReviewCommentInput;
