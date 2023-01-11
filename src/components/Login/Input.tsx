type input = {
  inputName: string;
  inputType: string;
  placeholder: string;
  onChangeInputValue(e: any): void;
};

const Input = ({ inputName, inputType, placeholder, onChangeInputValue }: input) => {
  return (
    <div>
      <div className="form-control w-2/5 min-w-[250px]">
        <div className="text-sm">{inputName}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered text-center"
          onChange={onChangeInputValue}
          name={inputType}
        />
      </div>
    </div>
  );
};

export default Input;
