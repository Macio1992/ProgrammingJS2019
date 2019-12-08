const colors = ["red", "blue", "green"];

const divs = document.getElementsByClassName("test");
console.log(divs);

function getRandomColor() {
  const randomIndex = Math.floor((Math.random() * colors.length)) + 0;

  return colors[randomIndex];
}

function setRandomDivRandomColor() {
  const randomIndex = Math.floor((Math.random() * divs.length)) + 0;

  divs[randomIndex].classList.add(getRandomColor());
}

setRandomDivRandomColor();
