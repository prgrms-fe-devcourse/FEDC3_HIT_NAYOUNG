import WarningLabel from '@/components/SignupForm/WarningLabel';
import { FieldError } from 'react-hook-form';

const ErrorMessage = ({ errors }: { errors?: FieldError }) => {
  return <>{errors && <WarningLabel message={errors.message} />}</>;
};

export default ErrorMessage;
