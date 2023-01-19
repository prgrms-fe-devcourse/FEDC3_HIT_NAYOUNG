import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { RegisterTextareaProps, ReviewFormData } from '@/types';

type RegisterReviewContents = RegisterTextareaProps<ReviewFormData>;

const RegisterTextarea = ({
  rows,
  placeholder,
  register,
  registerName,
  registerRules,
  value,
  style,
  errors,
  ...props
}: RegisterReviewContents) => {
  return (
    <div className={style?.container}>
      <textarea
        rows={rows}
        className={style?.textarea}
        placeholder={placeholder}
        defaultValue={value}
        {...(register && register(registerName, registerRules))}
        {...props}
      />
      <ErrorMessage errors={errors} />
    </div>
  );
};

export default RegisterTextarea;
