let chosenIds = [];
const colors = [
  "red", "green", "blue",
  "green", "blue", "red",
];

function clickCell(id, index) {
  const element = document.getElementById(id);
  chosenIds.push(id);
  const color = colors[index - 1];
  element.classList.add(color);
}
