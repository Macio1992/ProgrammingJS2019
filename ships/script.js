function hit(event) {
  if (event.target.classList.contains("ship")) {
    console.log("trafiony");
    event.target.classList.remove("ship-black");
    event.target.classList.add("ship-red");
  } else {
    console.log("nie trafiony");
    event.target.classList.add("skull");
    event.target.classList.add("ship");
  }

}
