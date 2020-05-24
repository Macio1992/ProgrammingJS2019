const colors = ['blue', 'red', 'green', 'black', 'yellow'];
const colorToFind = colors[2];


function guessColor(elementId, index) {
    const clickedElement = document.getElementById(elementId);
    clickedElement.classList.add(colors[index-1])
    clickedElement.classList.remove("question_mark")
}