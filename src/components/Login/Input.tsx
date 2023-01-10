type input = {
  inputName: string;
  placeholder: string;
};

const Input = ({ inputName, placeholder }: input) => {
  return (
    <div>
      <div className="form-control w-80 max-w-xs">
        <div className="text-sm">{inputName}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered text-center"
        />
      </div>
    </div>
  );
};

export default Input;
