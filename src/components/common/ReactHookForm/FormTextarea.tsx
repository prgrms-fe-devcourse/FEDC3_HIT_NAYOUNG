import ErrorMessage from '@/components/ReviewCreateForm/ErrorMessage';
import { FormTextareaProps } from '@/types';

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
