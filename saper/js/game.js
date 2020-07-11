const BOMB_CLASS = "bomb";
const NO_EVENTS_CLASS = "no-events";
const NUMBER_CLASS = "number";
const HIDDEN_BOMB = "hidden-bomb";
const HIDDEN_NUMBER = "hidden-number";

let POINTS = 0;

const resultParagraph = document.getElementById("resultParagraph");
const gameContainer = document.getElementById("gameContainer");

function playGame(elementId) {
    const clickedElement = document.getElementById(elementId);
    const numberCellsCount = getNumberCellsCount();

    if (clickedElement.classList.contains(BOMB_CLASS)) {
        clickedElement.classList.remove(HIDDEN_BOMB);
        gameContainer.classList.add(NO_EVENTS_CLASS);
        setResultParagraphText("Przegrana!");
        return;
    }

    clickedElement.classList.remove(HIDDEN_NUMBER);
    POINTS++;

    if (POINTS === numberCellsCount) {
        gameContainer.classList.add(NO_EVENTS_CLASS);
        setResultParagraphText("Wygrana!");
        showAllBombs();
    }
}

function setResultParagraphText(textToDisplay) {
    resultParagraph.innerHTML = textToDisplay;
}

function getBombCount() {
    const bombCount = document.getElementsByClassName(BOMB_CLASS).length;
    return bombCount;
}

function getNumberCellsCount() {
    const numberCellsCount = document.getElementsByClassName(NUMBER_CLASS).length;
    return numberCellsCount;
}

function showAllBombs() {
    const bombs = document.getElementsByClassName(BOMB_CLASS);

    for (let index = 0; index < bombs.length; index++) {
        bombs[index].classList.remove(HIDDEN_BOMB);
    }
}
