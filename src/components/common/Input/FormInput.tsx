import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { RegisterInputProps } from '@/types';

function FormInput<FormValues>({
  type,
  placeholder,
  register,
  registerName,
  registerRules,
  style,
  errors,
  ...props
}: RegisterInputProps<FormValues>) {
  return (
    <div className={style?.container}>
      <input
        className={style?.input}
        placeholder={placeholder}
        type={type}
        {...(register && register(registerName, registerRules))}
        {...props}
      />
      {errors && <ErrorMessage errors={errors} />}
    </div>
  );
}

export default FormInput;
