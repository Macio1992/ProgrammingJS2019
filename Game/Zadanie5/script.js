let chosenIds = [];
const colors = ["red", "green", "blue"];

function sendID(id, index) {
    const element = document.getElementById(id);
    chosenIds.push(id);
    const color = colors[index-1];
    element.classList.add(color);
}
