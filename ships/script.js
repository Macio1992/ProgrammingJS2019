function hit(event) {
  // if (event.target.classList.contains("icon")) {
  //   console.log("trafiony");
  //   event.target.classList.remove("ship");
  //   event.target.classList.add("hitShip");
  // } else {
  //   console.log("nie trafiony");
  //   event.target.classList.add("skull");
  //   event.target.classList.add("icon");
  // }

  const cellShips = document.getElementsByClassName("ship");
  // console.log("cellShips", cellShips);

  let fields = [];

  for (let i = 0; i < cellShips.length; i++) {
    fields.push(cellShips[i].classList[0]);
  }
  console.log(fields);

  // const hitCell = event.target;
  // console.log(hitCell.classList[0]);
}
