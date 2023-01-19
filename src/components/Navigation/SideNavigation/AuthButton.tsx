import { FiLogIn, FiLogOut } from 'react-icons/fi';

type AuthButtonType = {
  authState: boolean;
};

const AuthButton = ({ authState }: AuthButtonType) => {
  return (
    <li className="flex max-xl:justify-center items-center gap-2">
      <div>{authState ? <FiLogOut /> : <FiLogIn />}</div>
      <div className="max-xl:hidden">{authState ? '로그아웃' : '로그인'}</div>
    </li>
  );
};

export default AuthButton;
