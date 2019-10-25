function getRandomCell() {
  let letters = ['A', 'B', 'C'];
  let digits = [1, 2, 3];
  let randomCells = [];

  for (let index = 0; index < 3; index++) {

    let rolledCell;
    do {
      let randomL = Math.floor((Math.random() * 3) + 0);
      let randomD = Math.floor((Math.random() * 3) + 0);

      rolledCell = letters[randomL] + digits[randomD];
    } while (randomCells.indexOf(rolledCell) !== -1);

    randomCells.push(rolledCell);

  }

  return randomCells;
}
