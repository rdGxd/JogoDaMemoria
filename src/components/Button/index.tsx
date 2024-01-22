import { ListImage } from "../../utils/listImage";
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
const arr: string[] = [];

export const Button = ({ img }: IButton) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const srcImg = e.currentTarget.children[1].getAttribute("src") as string;
    const selectedBlock = e.currentTarget.children[0];

    if (!primeiroClick) {
      if (!arr.includes(primeiroClick)) {
        selectedBlock.classList.add("hidden");
        selectedBlock.parentElement?.setAttribute("disabled", "disabled");
        clickSameBlock = selectedBlock.parentElement;
        primeiroClick = srcImg;
        primeiroBloco = selectedBlock;
        return;
      }
    }

    if (!segundoClick) {
      selectedBlock.parentElement?.removeAttribute("disabled");
      selectedBlock.classList.add("hidden");
      segundoClick = srcImg;
      segundoBloco = selectedBlock;

      const result = Result({
        primeiroClick,
        segundoClick,
        primeiroBloco,
        segundoBloco,
      });

      if (result) {
        if (!arr.includes(segundoClick)) {
          arr.push(segundoClick.toString());
          if (arr.length === ListImage.length) {
            console.log("ACABO");
            return;
          }
        }
      } else {
        primeiroBloco.classList.remove("hidden");
        segundoBloco.classList.remove("hidden");
      }

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
