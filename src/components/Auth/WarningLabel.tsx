type InputProps = {
  message: string | undefined;
  style?: string;
};

const WarningLabel = ({ message, style }: InputProps) => {
  return (
    <label style={{ width: '330px' }}>
      <span className={style || 'label-text-alt text-red-500'}>{message}</span>
    </label>
  );
};

export default WarningLabel;
