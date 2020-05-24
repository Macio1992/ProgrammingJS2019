const QUESTION_MARK_CLASS = "question_mark";
const colors = ['blue', 'red', 'green', 'black', 'yellow'];
const colorToFind = colors[2];

function guessColor(elementId, index) {
    const clickedElement = document.getElementById(elementId);
    const clickedColor = colors[index-1];
    clickedElement.classList.add(clickedElement);
    clickedElement.classList.remove(QUESTION_MARK_CLASS);
}
