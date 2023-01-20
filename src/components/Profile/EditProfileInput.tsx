type EditProfileInputProps = {
  label: string;
  name: string;
  data: string;
  onChangeEditInputValue: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditProfileInput = ({
  label,
  name,
  data,
  onChangeEditInputValue,
}: EditProfileInputProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        className="input input-bordered w-full max-w-xs"
        name={name}
        value={data || ''}
        onChange={onChangeEditInputValue}
      />
    </div>
  );
};

export default EditProfileInput;
