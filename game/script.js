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
  verifyIfColorsChosenWrongly();
  const element = document.getElementById(id);
  addIdToChosenIds(id);
  addColorToChosenColors(index);
  const color = colors[index - 1];
  element.classList.remove("question-mark");
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
      preventDivsFromClicking();
      setPointsParagraphText();
      resetGameVariables();
    }
    clicks = 0;
  }
}

function setPointsParagraphText() {
  pointsParagraph.innerHTML = "Points: " + points;
}

function resetGameVariables() {
  chosenColors = [];
  chosenIds = [];
}

function preventDivsFromClicking() {
  for (let i = 0; i < chosenIds.length; i++) {
    const element = document.getElementById(chosenIds[i]);
    element.classList.add('no-events');
  }
}

function verifyIfColorsChosenWrongly() {
  if (clicks === 0) {
    if (chosenIds.length > 0) {
      resetWronglyChosenColors();
      resetGameVariables();
    }
  }
}

function resetWronglyChosenColors() {
  const firstDiv = document.getElementById(chosenIds[0]);
  const secondDiv = document.getElementById(chosenIds[1]);
  firstDiv.classList.remove(chosenColors[0]);
  secondDiv.classList.remove(chosenColors[1]);
  firstDiv.classList.add("question-mark");
  secondDiv.classList.add("question-mark");
}