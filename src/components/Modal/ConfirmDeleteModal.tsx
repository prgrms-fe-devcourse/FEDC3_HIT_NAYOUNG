import { commentDeleteState } from '@/store/recoilCommentState';
import {
  confirmDeleteCommentModalState,
  confirmDeleteReviewModalState,
} from '@/store/recoilModalState';
import { reviewDeleteState } from '@/store/recoilReviewState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ModalPortal from './ModalPortal';

type ConfirmDeleteModalType = {
  target: string;
  text: string;
};

const ConfirmDeleteModal = ({ target, text }: ConfirmDeleteModalType) => {
  const [commentDeleteOpen, setCommentDeleteOpen] = useRecoilState(
    confirmDeleteCommentModalState
  );
  const [reviewDeleteOpen, setReviewDeleteOpen] = useRecoilState(
    confirmDeleteReviewModalState
  );
  const isDeleteComment = useSetRecoilState(commentDeleteState);
  const isDeleteReview = useSetRecoilState(reviewDeleteState);

  const onDeleteHandler = (target: string) => {
    if (target === 'review') {
      isDeleteReview(true);
      setReviewDeleteOpen(false);
    }

    if (target === 'comment') {
      isDeleteComment(true);
      setCommentDeleteOpen(false);
    }
  };

  const onCloseModalHandler = () => {
    setReviewDeleteOpen(false);
    setCommentDeleteOpen(false);
  };

  return (
    <ModalPortal>
      <input
        readOnly
        type="checkbox"
        id="create-review-cancel-modal"
        className="modal-toggle"
        checked={target === 'review' ? reviewDeleteOpen : commentDeleteOpen}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-GRAY_100 text-TEXT_BASE_BLACK">
          <h3 className="font-bold text-lg">{text}</h3>
          <div className="modal-action">
            <button className="btn btn-outline" onClick={onCloseModalHandler}>
              닫기
            </button>
            <button className="btn btn-outline" onClick={() => onDeleteHandler(target)}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ConfirmDeleteModal;
