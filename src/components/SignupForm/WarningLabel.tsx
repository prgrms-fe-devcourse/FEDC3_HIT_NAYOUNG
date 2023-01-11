type InputProps = {
  message: string | undefined;
};

const WarningLabel = ({ message }: InputProps) => {
  return (
    <label>
      <span className="label-text-alt text-red-500">{message}</span>
    </label>
  );
};

export default WarningLabel;
