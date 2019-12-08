const digits = [5, 7, 15, 43];

function getRandomDigit() {
  const randomIndex = Math.floor((Math.random() * (digits.length - 1))) + 0;

  return digits[randomIndex];
}
