import LoginForm from '@/components/Auth/Login';
import { InformLoginModal } from '@/components/Modal';

const Login = () => {
  return (
    <div>
      <LoginForm />
      <InformLoginModal />
    </div>
  );
};

export default Login;
