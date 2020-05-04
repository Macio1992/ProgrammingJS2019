let chosenIds = [];
const colors = [
  "red", "green", "blue",
  "green", "blue", "red",
];
let clicks = 0;
let chosenColors = [];
let points = 0;
const pointsParagraph = document.getElementById("pointsParagraph");

function clickCell(id, index) {
  const element = document.getElementById(id);
  addIdToChosenIds(id);
  addColorToChosenColors(index);
  const color = colors[index - 1];
  element.classList.add(color);
  clicks++;

  verifyColorsChoice();
}

function addColorToChosenColors(index) {
  const color = colors[index - 1];
  chosenColors.push(color);
}

function addIdToChosenIds(id) {
  chosenIds.push(id);
}

function verifyColorsChoice() {
  if (clicks === 2) {
    if (chosenColors[0] === chosenColors[1]) {
      points++;
      pointsParagraph.innerHTML = "Points: " + points;
      chosenColors = [];
      clicks = 0;
    }
  }
}
