import ModalPortal from '@/components/Modal/ModalPortal';
import { useNavigate } from 'react-router-dom';

type CancelModalPropsType = {
  isOpen: boolean;
  modalOffHandler: () => void;
};

const InformCancelModal = ({ isOpen, modalOffHandler }: CancelModalPropsType) => {
  const navigate = useNavigate();

  return (
    <ModalPortal>
      <input
        readOnly
        type="checkbox"
        id="create-review-cancel-modal"
        className="modal-toggle"
        checked={isOpen}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-GRAY_100 text-TEXT_BASE_BLACK">
          <h3 className="font-bold text-lg">리뷰 작성을 취소하시겠습니까?</h3>
          <p className="py-4">현재까지 작성한 내용이 삭제됩니다.</p>
          <div className="modal-action">
            <button className="btn btn-outline" onClick={() => navigate(-1)}>
              지우기
            </button>
            <button className="btn btn-outline" onClick={modalOffHandler}>
              계속작성하기
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default InformCancelModal;
