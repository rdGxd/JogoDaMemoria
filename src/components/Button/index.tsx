interface IButton {
  img: string;
  onClick?: () => void;
}

export const Button = ({ img, onClick }: IButton) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className=" h-24 w-24 rounded-2xl bg-dark-10 px-6 py-4"
      >
        <img src={img} alt="" className="h-11 w-11" />
      </button>
    </>
  );
};
