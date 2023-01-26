type InputProps = {
  message: string | undefined;
  style?: string;
};

const WarningLabel = ({ message, style }: InputProps) => {
  return (
    <label>
      <span className={style || 'label-text-alt text-red-500'}>{message}</span>
    </label>
  );
};

export default WarningLabel;
