import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { RegisterInputProps } from '@/types';

type SearchFormData = {
  searchWord: string;
};

type InputPropsType = RegisterInputProps<SearchFormData>;

const Input = ({
  type,
  placeholder,
  register,
  registerName,
  registerRules,
  style,
  errors,
  ...props
}: InputPropsType) => {
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
};

export default Input;
