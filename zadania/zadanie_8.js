const tablica = [1, 5, 6, 8, 2];

function checkIfExists(num) {
  return tablica.indexOf(num) !== -1;
}

console.log(checkIfExists(2));
