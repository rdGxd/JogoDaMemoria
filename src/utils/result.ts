interface IResult {
  primeiroClick: string;
  segundoClick: string;
  primeiroBloco: Element;
  segundoBloco: Element;
}

export const Result = ({ primeiroClick, segundoClick }: IResult) => {
  if (primeiroClick === segundoClick) {
    return true;
  } else {
    alert("ERRADO");
    return false;
  }
};
