const array2D = [
  [15, 57, 36],
  [36, 47, 25],
  [25, 36, 47]
];

function getRandomArray() {
  const randomArr = Math.floor((Math.random() * array2D.length) + 0);

  return array2D[randomArr];
}
