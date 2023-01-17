import { informLoginModalState } from '@/store/store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LOGIN_PAGE, SIGNUP_PAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';
import ModalPortal from './ModalPortal';

const InformLoginModal = () => {
  const [open, setOpen] = useRecoilState<boolean>(informLoginModalState);
  const setLogInModalState = useSetRecoilState(informLoginModalState);

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
          <h3 className="font-bold text-xl">
            지금 로그인해서 <br /> 더 많은 리뷰를 구경하세요
          </h3>
          <p className="pt-10 text-sm">
            아직 회원이 아니신가요? &nbsp;
            <Link onClick={() => setOpen(false)} to={SIGNUP_PAGE} className="text-HOVER">
              회원가입하기
            </Link>
          </p>
          <div className="modal-action mt-2 mb-4">
            <Link
              className="btn w-full bg-BASE border-BASE hover:bg-HOVER hover:border-HOVER"
              onClick={() => setOpen(false)}
              to={LOGIN_PAGE}
            >
              로그인하기
            </Link>
          </div>
          <center>
            <label
              onClick={() => {
                setOpen(false);
                setLogInModalState(false);
              }}
              htmlFor="my-modal-6"
              className="text-sm hover:cursor-pointer"
            >
              다음에 할게요
            </label>
          </center>
        </div>
      </div>
    </ModalPortal>
  );
};

export default InformLoginModal;
