let points = 0;
const shipsAmount = 3;
const chancesAmount = 5;
const pointsCounterH1 = document.getElementById("pointsCounter");
const movesCounterH1 = document.getElementById("movesCounter");
pointsCounterH1.innerHTML = points;
const gameStatusMessage = document.getElementById("gameStatusMessage");
let moves = 0;
const getRandomSetButton = document.getElementById("getRandomSetButton");

function hit(event) {
  if (points === shipsAmount) {
    return;
  }

  if (moves >= chancesAmount) {
    return;
  }

  setHitShipClass(event);
  countMoves();
  setGameStatus();
}

function countMoves() {
  moves++;
  movesCounterH1.innerHTML = moves;
}

function setHitShipClass(event) {
  if (event.target.classList.contains("ship")) {
    points++;
    pointsCounterH1.innerHTML = points;
    event.target.classList.remove("ship");
    event.target.classList.add("hitShip");
  }
}

function setGameStatus() {
  if (points === shipsAmount) {
    gameStatusMessage.innerHTML = "Wygrana!";
    return;
  }

  if (moves >= chancesAmount) {
    gameStatusMessage.innerHTML = "Przegrana!";
    return;
  }
}

function getRandomSet() {
  let allowedSets = [
    ['A1', 'B3', 'C1'],
    ['A3', 'B1', 'C3'],
    ['A2', 'C1', 'C3']
  ];
  const randomIndex = Math.floor((Math.random() * (allowedSets.length - 1)) + 0);

  return allowedSets[randomIndex];
}

const cells = document.getElementsByClassName("cell");

function setShips() {
  const randomSetArray = getRandomSet();

  for (let index = 0; index < randomSetArray.length; index++) {
    let cell = document.getElementById(randomSetArray[index]);
    cell.classList.add("ship");
  }
}

function fillBoardWithShips() {
  setShips();
  removeRandomSetButton();
}

function removeRandomSetButton() {
  getRandomSetButton.remove();
}
