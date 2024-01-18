interface IResult {
  primeiroClick: string;
  segundoClick: string;
}

export const Result = ({ primeiroClick, segundoClick }: IResult) => {
  if (primeiroClick === segundoClick) {
    alert("FOI");
    return true;
  } else {
    alert("ERRADO");
    return false;
  }
};
