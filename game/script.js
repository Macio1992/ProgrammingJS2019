let chosenIds = [];
const colors = [
  "red", "green", "blue",
  "green", "blue", "red",
];
let clicks = 0;
let chosenColors = [];
let points = 0;

function clickCell(id, index) {
  const element = document.getElementById(id);
  chosenIds.push(id);
  const color = colors[index - 1];
  chosenColors.push(color);
  element.classList.add(color);
  clicks++;
  if (clicks === 2) {
    if (chosenColors[0] === chosenColors[1]) {
      points++;
    }
  }
}
