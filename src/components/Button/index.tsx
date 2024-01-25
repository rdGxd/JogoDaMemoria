import { useState } from "react";
import { ListImage } from "../../utils/listImage";
import { Result } from "../../utils/result";
import { Winner } from "../Winner";

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
  const [winner, setWinner] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const srcImg = e.currentTarget.children[1].getAttribute("src") as string;
    const selectedBlock = e.currentTarget.children[0];

    if (!arr.includes(srcImg)) {
      if (!primeiroClick) {
        selectedBlock.classList.add("hidden");
        selectedBlock.parentElement?.setAttribute("disabled", "disabled");
        clickSameBlock = selectedBlock.parentElement;
        primeiroClick = srcImg;
        primeiroBloco = selectedBlock;
        return;
      }
      if (!segundoClick) {
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
          arr.push(segundoClick);
          if (arr.length === ListImage.length) {
            return setWinner(true);
          }
        } else {
          if (arr.includes(primeiroClick)) {
            primeiroBloco.classList.add("hidden");
          }

          if (arr.includes(segundoClick)) {
            segundoBloco.classList.add("hidden");
          }

          clickSameBlock?.removeAttribute("disabled");
          primeiroBloco.classList.remove("hidden");
          segundoBloco.classList.remove("hidden");
        }
      }

      clickSameBlock?.removeAttribute("disabled");
      primeiroClick = "";
      segundoClick = "";
    }
  };

  return (
    <>
      {winner && (
        <div className="absolute ">
          <Winner />
        </div>
      )}

      <button
        disabled={winner}
        type="button"
        title="btn"
        onClick={handleClick}
        className="flex h-24 w-24 content-center items-center justify-center rounded-2xl bg-dark-10 px-6 py-4 text-center"
      >
        <span className="absolute h-24 w-24 justify-center rounded-2xl border border-[#EE9430] bg-[#2B0E11] text-center font-October text-8xl text-brand-color-light">
          ?
        </span>
        <img src={img} alt="" />
      </button>
    </>
  );
};
