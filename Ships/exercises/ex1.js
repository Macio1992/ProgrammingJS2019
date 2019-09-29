/* Stworz tablice i wypisz jej elementy */
const array = [5, 22, 7, 8];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/* Stworz tablice i zsumuj jej elementy */
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log('sum = ', sum);

/* Wypisz tylko parzyste elementy */
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log('parz ', array[i]);
  }
}

/* Znajdz najwieksza liczbe w tablicy */
let max = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log('max ', max);
