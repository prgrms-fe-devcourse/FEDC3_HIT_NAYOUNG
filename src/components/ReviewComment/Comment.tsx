import { BsTrash } from 'react-icons/bs';
import { formatDateTime } from '@/utils/format';
import { CommentType } from '@/types';

type ReviewCommentProps = {
  userId: string;
  comment: CommentType;
  clickHandler: (commentId: string) => void;
};

const Comment = ({ comment, userId, clickHandler }: ReviewCommentProps) => {
  return (
    <li key={comment._id} className="bg-GRAY_100 mb-4 rounded-2xl p-6 ">
      <div className="flex items-center justify-between mb-4 text-TEXT_BASE_BLACK">
        <p>{comment.comment}</p>
        {comment.author._id === userId && (
          <button onClick={() => clickHandler(comment._id)}>
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
  );
};

export default Comment;
