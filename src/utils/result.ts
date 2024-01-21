interface IResult {
  primeiroClick: string;
  segundoClick: string;
  primeiroBloco: Element;
  segundoBloco: Element;
}

export const Result = ({
  primeiroClick,
  segundoClick,
  primeiroBloco,
  segundoBloco,
}: IResult) => {
  setTimeout(() => {
    if (primeiroClick === segundoClick) {
      alert("FOI");
      return true;
    } else {
      primeiroBloco.classList.remove("hidden");
      segundoBloco.classList.remove("hidden");
      alert("ERRADO");
      return false;
    }
  }, 500);
};
