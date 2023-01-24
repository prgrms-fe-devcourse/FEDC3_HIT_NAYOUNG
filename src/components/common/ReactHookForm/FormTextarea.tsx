import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { FormTextareaProps } from '@/types';

/**
 * FormTextarea 쓸 때, register에서 관리하는 값의 타입을 넘겨주세요. ex) FormTextarea<FormValueType>
 * @register useForm의 리턴값
 * @registerName register에서 관리할 key값
 * @registerRules 해당 input value를 관리할 때 규칙(required, pattern..)
 * @errors useForm > formState > errors 중 해당 registerName의 에러 | 넘기면, 에러메시지 보여줌
 * @etc 그 외는 textarea attribute
 */
function FormTextarea<FormValues>({
  rows,
  placeholder,
  register,
  registerName,
  registerRules,
  value,
  style,
  errors,
  ...props
}: FormTextareaProps<FormValues>) {
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
}

export default FormTextarea;
