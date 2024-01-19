import { Result } from "../../utils/result";

interface IButton {
  img: string;
  onClick?: () => void;
}

let primeiroClick: string;
let segundoClick: string;
let primeiroBloco: Element;
let segundoBloco: Element;
let clickSameBlock: Element | null;

export const Button = ({ img }: IButton) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const srcImg = e.currentTarget.children[1].getAttribute("src") as string;
    const selectedBlock = e.currentTarget.children[0];

    if (!primeiroClick) {
      selectedBlock.classList.add("hidden");
      selectedBlock.parentElement?.setAttribute("disabled", "disabled");
      clickSameBlock = selectedBlock.parentElement;
      primeiroClick = srcImg;
      primeiroBloco = selectedBlock;
      return;
    }

    if (!segundoClick) {
      selectedBlock.parentElement?.removeAttribute("disabled");
      selectedBlock.classList.add("hidden");
      segundoClick = srcImg;
      segundoBloco = selectedBlock;
      Result({
        primeiroClick,
        segundoClick,
        primeiroBloco,
        segundoBloco,
      });

      clickSameBlock?.removeAttribute("disabled");
      primeiroClick = "";
      segundoClick = "";
    }
  };

  return (
    <>
      <button
        type="button"
        title="btn"
        onClick={handleClick}
        className="flex h-24 w-24 content-center items-center justify-center rounded-2xl bg-dark-10 px-6 py-4 text-center"
      >
        <span className="absolute  h-24 w-24 justify-center rounded-2xl border border-[#EE9430] bg-[#2B0E11] text-center font-October text-8xl text-brand-color-light ">
          ?
        </span>
        <img src={img} alt="" />
      </button>
    </>
  );
};
