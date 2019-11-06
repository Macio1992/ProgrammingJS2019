function getRandomDigit(array) {
  let randomDigitIndex = Math.floor((Math.random() * (array.length - 1)) + 0);
  return array[randomDigitIndex];
}
