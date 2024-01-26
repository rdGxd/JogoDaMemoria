export const ListImage = [
  "/image/01.svg",
  "/image/02.svg",
  "/image/03.svg",
  "/image/04.svg",
  "/image/05.svg",
  "/image/06.svg",
  "/image/07.svg",
  "/image/08.svg",
  "/image/09.svg",
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
