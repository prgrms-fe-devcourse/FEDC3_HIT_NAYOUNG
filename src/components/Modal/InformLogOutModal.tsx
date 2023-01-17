import { informLogOutModalState } from '@/store/store';
import { removeLocalStorage } from '@/utils/storage';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { HOME_PAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';
import ModalPortal from './ModalPortal';

const InformLogOutModal = () => {
  const [open, setOpen] = useRecoilState<boolean>(informLogOutModalState);

  const onClickLogOut = () => {
    removeLocalStorage('login-token');
    useResetRecoilState(informLogOutModalState);
    alert('로그아웃 되었습니다.');
  };

  return (
    <ModalPortal>
      <input
        readOnly
        checked={open}
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">정말 로그아웃 하시겠습니까?</h3>
          <div className="modal-action mt-4 mb-4">
            <Link
              className="btn w-full bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
              onClick={() => {
                setOpen(false);
                onClickLogOut();
              }}
              to={HOME_PAGE}
            >
              로그아웃
            </Link>
          </div>
          <center>
            <label
              onClick={() => setOpen(false)}
              htmlFor="my-modal-6"
              className="text-sm hover:cursor-pointer"
            >
              로그인 유지
            </label>
          </center>
        </div>
      </div>
    </ModalPortal>
  );
};

export default InformLogOutModal;
