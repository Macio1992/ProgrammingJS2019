let sum = 0;

function maximumScore(tileHand) {
    tileHand.forEach(element => {
        sum += element.score;
    })

    return sum;
}


console.log(maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ]));