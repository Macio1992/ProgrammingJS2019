const BOMB_CLASS = "bomb";
const NO_EVENTS_CLASS = "no-events";

const resultParagraph = document.getElementById("resultParagraph");
const gameContainer = document.getElementById("gameContainer");

function playGame(elementId) {
    const clickedElement = document.getElementById(elementId);

    if (clickedElement.classList.contains(BOMB_CLASS)) {
        gameContainer.classList.add(NO_EVENTS_CLASS);
        setResultParagraphText("Przegrana!");
        return;
    }
}

function setResultParagraphText(textToDisplay) {
    resultParagraph.innerHTML = textToDisplay;
}
