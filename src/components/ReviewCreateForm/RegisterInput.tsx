import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { RegisterInputProps, ReviewFormData } from '@/types';

type RegisterInputPropsType = RegisterInputProps<ReviewFormData>;

const RegisterInput = ({
  type,
  placeholder,
  register,
  registerName,
  registerRules,
  style,
  errors,
  ...props
}: RegisterInputPropsType) => {
  return (
    <div className={style?.container}>
      <input
        className={style?.input}
        placeholder={placeholder}
        type={type}
        {...(register && register(registerName, registerRules))}
        {...props}
      />
      <ErrorMessage errors={errors} />
    </div>
  );
};

export default RegisterInput;
