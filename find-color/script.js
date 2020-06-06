const QUESTION_MARK_CLASS = "question_mark";
const NO_EVENTS_CLASS = "no-events";
const MESSAGES_ITEM = "messages__item";
const MESSAGES_ITEM_ORDINARY = "messages__item--ordinary";
const MESSAGES_ITEM_WIN = "messages__item--win";
const MESSAGES_ITEM_LOST = "messages__item--lost";

const colors = ['blue', 'red', 'green', 'black', 'yellow'];
const colorToFind = colors[2];
let chancesCount = 3;
let chosenIds = [];
let chosenColors = [];

const ulElement = document.getElementById("messagesUl");
const gameContainer = document.getElementById("gameContainer");
const chancesParagraph = document.getElementById("chancesParagraph");

addLiToUl(`Witaj w grze, szukasz koloru: ${colorToFind}`, MESSAGES_ITEM_ORDINARY);
setChancesParagraphText();

function guessColor(elementId, index) {
    const clickedElement = document.getElementById(elementId);
    const clickedColor = colors[index - 1];
    clickedElement.classList.add(clickedColor);
    clickedElement.classList.remove(QUESTION_MARK_CLASS);
    chancesCount--;
    setChancesParagraphText();
    chosenIds.push(elementId);
    chosenColors.push(clickedColor);

    if (clickedColor === colorToFind) {
        addLiToUl("Wygrana!", MESSAGES_ITEM_WIN);
        gameContainer.classList.add(NO_EVENTS_CLASS);
        return;
    }

    if (chancesCount === 0) {
        addLiToUl("Wykorzystałeś wszystkie szanse. Przegrana", MESSAGES_ITEM_LOST);
        gameContainer.classList.add("no-events");
        return;
    }

    addLiToUl(`Nie trafiłeś, spróbuj ponownie, szukaj koloru: ${colorToFind}`, MESSAGES_ITEM_ORDINARY);
}

function addLiToUl(liText, additionalClass) {
    const liElement = document.createElement("li");
    liElement.innerHTML = liText;
    liElement.classList.add(MESSAGES_ITEM);
    liElement.classList.add(additionalClass);
    ulElement.appendChild(liElement);
}

function setChancesParagraphText() {
    chancesParagraph.innerHTML = `Zostało ci <span>${chancesCount}</span> szans`;
}

function resetGame() {
    chancesCount = 3;
    setChancesParagraphText();
    ulElement.innerHTML = "";
    addLiToUl("Zresetowałeś gre, zacznij od nowa", MESSAGES_ITEM_ORDINARY);

    for (let i = 0; i < chosenIds.length; i++) {
        const clickedElement = document.getElementById(chosenIds[i]);
        clickedElement.classList.remove(chosenColors[i]);
        clickedElement.classList.add(QUESTION_MARK_CLASS);
    }

    chosenIds = [];
    chosenColors = [];

    if (gameContainer.classList.contains(NO_EVENTS_CLASS)) {
        gameContainer.classList.remove(NO_EVENTS_CLASS);
    }
}


