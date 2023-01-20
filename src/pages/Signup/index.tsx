import SignupForm from '@/components/Auth/SignUp';
import { InformLoginModal } from '@/components/Modal';

const Signup = () => {
  return (
    <div>
      <SignupForm />
      <InformLoginModal />
    </div>
  );
};

export default Signup;
