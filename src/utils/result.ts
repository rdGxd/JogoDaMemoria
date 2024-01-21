interface IResult {
  primeiroClick: string;
  segundoClick: string;
  primeiroBloco: Element;
  segundoBloco: Element;
}

export const Result = ({ primeiroClick, segundoClick }: IResult) => {
  if (primeiroClick === segundoClick) {
    console.log("FOI");
    return true;
  } else {
    console.log("ERRADO");
    return false;
  }
};
