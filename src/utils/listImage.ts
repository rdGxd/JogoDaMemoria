export const ListImage = [
  "/src/assets/image/01.png",
  "/src/assets/image/02.png",
  "/src/assets/image/03.png",
  "/src/assets/image/04.png",
  "/src/assets/image/05.png",
  "/src/assets/image/06.png",
  "/src/assets/image/07.png",
  "/src/assets/image/08.png",
  "/src/assets/image/09.png",
];

export function shuffleArray() {
  const newArray = [];
  let number = Math.floor(Math.random() * ListImage.length);
  let count = 1;
  newArray.push(ListImage[number]);

  while (count < ListImage.length) {
    const newNumber = Math.floor(Math.random() * ListImage.length);
    if (!newArray.includes(ListImage[newNumber])) {
      count++;
      number = newNumber;
      newArray.push(ListImage[number]);
    }
  }

  return newArray;
}
