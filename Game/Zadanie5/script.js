let chosenIds = [];
let colors = ["red", "green", "blue"];

function sendID(id, index) {
    let element = document.getElementById(id);
    chosenIds.push(id);
    let color = colors[index-1];
    element.classList.add(color);
}
