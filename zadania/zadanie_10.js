function getRandomCell() {
  let letters = ['A', 'B', 'C'];
  let digits = [1, 2, 3];

  let randomL = Math.floor((Math.random() * 3) + 0);
  let randomD = Math.floor((Math.random() * 3) + 0);
  console.log(letters[randomL] + digits[randomD]);
}

for (let index = 0; index < 10; index++) {
  getRandomCell();
}
