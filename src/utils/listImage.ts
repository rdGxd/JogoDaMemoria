export const ListImage = [
  "/image/01.png",
  "/image/02.png",
  "/image/03.png",
  "/image/04.png",
  "/image/05.png",
  "/image/06.png",
  "/image/07.png",
  "/image/08.png",
  "/image/09.png",
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
