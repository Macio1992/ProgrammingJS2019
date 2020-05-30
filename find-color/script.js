const QUESTION_MARK_CLASS = "question_mark";
const colors = ['blue', 'red', 'green', 'black', 'yellow'];
const colorToFind = colors[2];
const ulElement = document.getElementById("messagesUl");
const gameContainer = document.getElementById("gameContainer");

addLiToUl(`Witaj w grze, szukasz koloru: ${colorToFind}`, "messages__item--ordinary");

function guessColor(elementId, index) {
    const clickedElement = document.getElementById(elementId);
    const clickedColor = colors[index-1];
    clickedElement.classList.add(clickedColor);
    clickedElement.classList.remove(QUESTION_MARK_CLASS);

    if (clickedColor === colorToFind) {
        addLiToUl("Wygrana!", "messages__item--win");
        gameContainer.classList.add("no-events");
    }
}

function addLiToUl(liText, additionalClass) {
    const liElement = document.createElement("li");
    liElement.innerHTML = liText;
    liElement.classList.add("messages__item");
    liElement.classList.add(additionalClass);
    ulElement.appendChild(liElement);
}
