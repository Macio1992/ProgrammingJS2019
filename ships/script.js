function hit(event) {

}

function getRandomSets() {
  let allowedSets = [
    ['A1', 'B3', 'C1'],
    ['A3', 'B1', 'C3'],
    ['A2', 'C1', 'C3']
  ];
  const randomIndex = Math.floor((Math.random() * (allowedSets.length - 1)) + 0);

  return allowedSets[randomIndex];
}

function fillBoardWithShips() {
  const randomSets = getRandomSets();

  for (let i = 0; i < randomSets.length; i++) {
    
  }
}
