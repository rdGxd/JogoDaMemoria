import { Button } from "..";
import { shuffleArray } from "../../utils/listImage";

export const Board = () => {
  return (
    <div className="mt-14 grid grid-cols-3 items-center justify-center gap-5 m-2">
      {shuffleArray().map((img) => (
        <Button img={img} key={img} />
      ))}
      {shuffleArray().map((img) => (
        <Button img={img} key={img} />
      ))}
    </div>
  );
};
