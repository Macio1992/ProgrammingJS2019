let element = document.getElementById("element");

function checkIfElementHasClass(className) {
  return element.classList.contains(className);
}

console.log(checkIfElementHasClass("green"));
