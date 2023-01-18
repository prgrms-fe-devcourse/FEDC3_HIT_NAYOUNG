import { BsTrash } from 'react-icons/bs';
import { formatDateTime } from '@/utils/format';
import { CommentType } from '@/types';
import { useSetRecoilState } from 'recoil';
import { confirmDeleteCommentModalState } from '@/store/recoilModalState';
import { ConfirmDeleteModal } from '@/components/Modal';

type ReviewCommentProps = {
  userId: string;
  comment: CommentType;
  clickHandler: (commentId: string) => void;
};

const Comment = ({ comment, userId, clickHandler }: ReviewCommentProps) => {
  const setOpen = useSetRecoilState<boolean>(confirmDeleteCommentModalState);

  return (
    <>
      <li key={comment._id} className="bg-GRAY_100 mb-4 rounded-2xl p-6 ">
        <div className="flex items-center justify-between mb-4 text-TEXT_BASE_BLACK">
          <p>{comment.comment}</p>
          {comment.author._id === userId && (
            <button
              onClick={() => {
                setOpen(true), clickHandler(comment._id);
              }}
            >
              <BsTrash />
            </button>
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-TEXT_SUB_GRAY text-sm">{comment.author.fullName}</span>
          <span className="text-TEXT_SUB_GRAY text-sm">
            {formatDateTime(comment.createdAt)}
          </span>
        </div>
      </li>

      <ConfirmDeleteModal target="comment" text="댓글을 삭제하시겠습니까?" />
    </>
  );
};

export default Comment;
