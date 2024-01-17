export const ListImage = [
  "/public/image/01.png",
  "/public/image/02.png",
  "/public/image/03.png",
  "/public/image/04.png",
  "/public/image/05.png",
  "/public/image/06.png",
  "/public/image/07.png",
  "/public/image/08.png",
  "/public/image/09.png",
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
