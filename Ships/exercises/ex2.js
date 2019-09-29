/* Stworz tablice 2D i wypisz jej elementy */
const array2D = [
  [4, 7, 8],
  [1, 5, 9],
  [2, 3, 6]
];

/* Policz sumy elementów w kazdej linii i wypisz obok */
for (let i = 0; i < array2D.length; i++) {
  let sum = 0;
  for (let j = 0; j < array2D[i].length; j++) {
    sum += array2D[i][j];
    process.stdout.write(array2D[i][j] + ' ');
  }
  process.stdout.write('== ' + sum);
  process.stdout.write('\n');
}

/* znajdx max w kazdym wierszu */
for (let i = 0; i < array2D.length; i++) {
  let max = 0;
  for (let j = 0; j < array2D[i].length; j++) {
    if (array2D[i][j] > max) {
      max = array2D[i][j];
    }
    process.stdout.write(array2D[i][j] + ' ');
  }
  process.stdout.write('== ' + max);
  process.stdout.write('\n');
}
