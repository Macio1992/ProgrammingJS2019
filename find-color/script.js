const QUESTION_MARK_CLASS = "question_mark";
const MESSAGES_ITEM = "messages__item";
const MESSAGES_ITEM_ORDINARY = "messages__item--ordinary";
const MESSAGES_ITEM_WIN = "messages__item--win";
const MESSAGES_ITEM_LOST = "messages__item--lost";
const colors = ['blue', 'red', 'green', 'black', 'yellow'];
const colorToFind = colors[2];
const ulElement = document.getElementById("messagesUl");
const gameContainer = document.getElementById("gameContainer");

addLiToUl(`Witaj w grze, szukasz koloru: ${colorToFind}`, MESSAGES_ITEM_ORDINARY);

function guessColor(elementId, index) {
    const clickedElement = document.getElementById(elementId);
    const clickedColor = colors[index-1];
    clickedElement.classList.add(clickedColor);
    clickedElement.classList.remove(QUESTION_MARK_CLASS);

    if (clickedColor === colorToFind) {
        addLiToUl("Wygrana!", MESSAGES_ITEM_WIN);
        gameContainer.classList.add("no-events");
    }
}

function addLiToUl(liText, additionalClass) {
    const liElement = document.createElement("li");
    liElement.innerHTML = liText;
    liElement.classList.add(MESSAGES_ITEM);
    liElement.classList.add(additionalClass);
    ulElement.appendChild(liElement);
}
