import WarningLabel from '@/components/Auth/WarningLabel';
import { FormInputProps } from '@/types';

/**
 * FormInput을 쓸 때, register에서 관리하는 값의 타입을 넘겨주세요. ex) FormInput<FormValueType>
 * @register useForm의 리턴값
 * @registerName register에서 관리할 key값
 * @registerRules 해당 input value를 관리할 때 규칙(required, pattern..)
 * @errors useForm > formState > errors 중 해당 registerName의 에러 | 넘기면, 에러메시지 보여줌
 * @etc 그 외는 input attribute
 */
function FormInput<FormValues>({
  type,
  placeholder,
  register,
  registerName,
  registerRules,
  style,
  errors,
  children,
  ...props
}: FormInputProps<FormValues>) {
  return (
    <div className={style?.container}>
      <input
        className={style?.input}
        placeholder={placeholder}
        type={type}
        {...(register && register(registerName, registerRules))}
        {...props}
      />
      {children}
      {errors && <WarningLabel message={errors.message} style={style?.errors} />}
    </div>
  );
}

export default FormInput;
