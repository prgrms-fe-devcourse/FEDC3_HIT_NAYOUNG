type button = {
  buttonText: string;
  onClickButton(e: any): void;
};

const Button = ({ buttonText, onClickButton }: button) => {
  return (
    <div>
      <button
        className="btn w-2/5 min-w-[250px] bg-[#FFC7C7] border-[#FFC7C7] hover:bg-rose-300 hover:border-rose-300"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
