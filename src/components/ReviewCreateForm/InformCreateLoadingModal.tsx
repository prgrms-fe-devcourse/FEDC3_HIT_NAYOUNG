import ModalPortal from '@/components/Modal/ModalPortal';

const InformCreateLoadingModal = ({ isOpen }: { isOpen: boolean }) => {
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
          <h3 className="font-bold text-lg">작성한 리뷰 업로드 중..</h3>
          <p className="py-4">리뷰를 업로드하고 있습니다. 잠시만 기다려주세요.</p>
        </div>
      </div>
    </ModalPortal>
  );
};

export default InformCreateLoadingModal;
