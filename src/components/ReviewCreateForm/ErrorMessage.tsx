import WarningLabel from '@/components/Auth/WarningLabel';
import { FieldError } from 'react-hook-form';

const ErrorMessage = ({ errors }: { errors?: FieldError }) => {
  return <>{errors && <WarningLabel message={errors.message} />}</>;
};

export default ErrorMessage;
