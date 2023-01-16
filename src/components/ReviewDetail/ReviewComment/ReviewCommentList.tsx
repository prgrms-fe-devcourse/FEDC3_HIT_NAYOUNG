import { useEffect, useState } from 'react';
import api from '@/Api/api';
import { Comment } from '@/types';
import { formatDateTime } from '@/utils/format';
import { BsTrash } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { createCommentState } from '@/store/store';

type ReviewCommentListProps = {
  commentList: Comment[];
};

// pull 하고 지울 것
const getUserInformation = async () => {
  try {
    const token = localStorage.getItem('login-token');
    if (token === null) {
      return false;
    }
    const response = await api.get(`/auth-user`, {
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const ReviewCommentList = ({ commentList }: ReviewCommentListProps) => {
  const [userId, setUserId] = useState();
  const setCreateComment = useSetRecoilState(createCommentState);
  const loginToken = localStorage.getItem('login-token');

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserInformation();
      setUserId(user._id);
    };
    getUser();
  }, []);

  const callCommentDeleteAPI = async (commentId: string) => {
    // 재확인 모달창으로 변경
    if (confirm('댓글을 삭제할까요?')) {
      try {
        const { data } = await api.delete('/comments/delete', {
          data: {
            id: commentId,
          },
          headers: {
            Authorization: `bearer ${loginToken}`,
          },
        });
        setCreateComment(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ul>
      {commentList
        .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
        .map((comment, index) => {
          return (
            <li key={index} className="bg-GRAY_100 mb-4 rounded-2xl p-6 ">
              <div className="flex items-center justify-between mb-4 text-TEXT_BASE_BLACK">
                <p>{comment.comment}</p>
                {comment.author._id === userId ? (
                  <button onClick={() => callCommentDeleteAPI(comment._id)}>
                    <BsTrash />
                  </button>
                ) : (
                  ''
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-TEXT_SUB_GRAY text-sm">
                  {comment.author.fullName}
                </span>
                <span className="text-TEXT_SUB_GRAY text-sm">
                  {formatDateTime(comment.createdAt)}
                </span>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ReviewCommentList;
