function getRandomDigit(array) {
  let randomDigitIndex = Math.floor((Math.random() * (array.length - 1)) + 0);
  console.log('randomIndex ', randomDigitIndex);
  return array[randomDigitIndex];
}


for (let index = 0; index < 100; index++) {
  getRandomDigit([7, 1, 2, 0, 4]);
}
