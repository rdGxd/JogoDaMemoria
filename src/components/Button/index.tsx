import { Result } from "../../utils/result";

interface IButton {
  img: string;
  onClick?: () => void;
}

let primeiroClick: string;
let segundoClick: string;

export const Button = ({ img }: IButton) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const srcImg = e.currentTarget.children[0].getAttribute("src") as string;

    if (!primeiroClick) return (primeiroClick = srcImg);

    if (!segundoClick) {
      segundoClick = srcImg;

      if (Result({ primeiroClick, segundoClick })) {
        primeiroClick = "";
        segundoClick = "";
      } else {
        primeiroClick = "";
        segundoClick = "";
      }
    }
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
