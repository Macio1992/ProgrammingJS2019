function getRandomDigit(array) {
  let randomDigitIndex = Math.floor((Math.random() * (array.length - 1)) + 0);
  console.log('randomIndex ', randomDigitIndex);
  return array[randomDigitIndex];
}
