import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { CommentType } from '@/types';
import { commentState } from '@/store/recoilCommentState';
import { getUserInformation } from '@/Api/user';
import { callCommentDeleteAPI } from '@/Api/comment';
import Comment from '@/components/ReviewComment/Comment';

type ReviewCommentListProps = {
  commentList: CommentType[];
};

const ReviewCommentList = ({ commentList }: ReviewCommentListProps) => {
  const [userId, setUserId] = useState('');
  const setDeleteComment = useSetRecoilState(commentState);

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserInformation();
      setUserId(user._id);
    };
    getUser();
  }, []);

  const onDeleteComment = async (commentId: string) => {
    if (confirm('댓글을 삭제할까요?')) {
      const data = await callCommentDeleteAPI(commentId);
      setDeleteComment(data);
    }
  };

  return (
    <ul>
      {commentList.length !== 0 ? (
        <>
          {commentList
            .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
            .map((comment) => {
              return (
                <Comment
                  key={comment._id}
                  userId={userId}
                  comment={comment}
                  clickHandler={onDeleteComment}
                />
              );
            })}
        </>
      ) : (
        <div className="text-center mt-10 text-TEXT_SUB_GRAY">
          작성된 댓글이 아직 없어요.
        </div>
      )}
    </ul>
  );
};

export default ReviewCommentList;
