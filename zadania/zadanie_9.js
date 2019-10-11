const numbers = [1, 5, 6, 8, 2, 4, 98, 24, 67];

function findNumbers(array) {
  let foundNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (numbers.indexOf(array[i]) !== -1) {
      foundNumbers.push(array[i]);
    }
  }

  return foundNumbers;
}
