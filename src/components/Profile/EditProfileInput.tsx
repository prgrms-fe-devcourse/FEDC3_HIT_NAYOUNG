type EditProfileInputProps = {
  name: string;
  data: string;
  onChangeEditInputValue: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditProfileInput = ({
  name,
  data,
  onChangeEditInputValue,
}: EditProfileInputProps) => {
  return (
    <div>
      <span>{name}: </span>
      <input
        className="input input-bordered text-center mt-5"
        name="username"
        value={data || ''}
        onChange={onChangeEditInputValue}
      />
    </div>
  );
};

export default EditProfileInput;
