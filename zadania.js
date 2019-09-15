function add(a, b) {
  return a + b;
}

// console.log(add(4, 5));

function getFirstValue(array) {
  return array[0];
}

// console.log(getFirstValue([3, 4, 5]));

function triArea(base, height) {
  return (base * height) / 2;
};

function addition(num) {
  return num + 1;
}

function nextEdge(side1, side2) {
  return (side1 + side2) - 1;
}

function animals(chickens, cows, pigs) {
  return (2 * chickens + 4 * cows + 4 * pigs);
}

function remainder(x, y) {
  return x % y;
}

function lessThanOrEqualToZero(num) {
  return num <= 0;
}


function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}


function divisibleByFive(n) {
  return n % 5 === 0;
}

function isEmpty(s) {
  return s.length === 0;
}

function comp(str1, str2) {
  return str1.length === str2.length;
}

function concatName(firstName, lastName) {
  return lastName + ", " + firstName;
}

// function reverse(arr) {
//   let newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

function reverse(arr) {
  return arr.reverse();
}

console.log(reverse([6, 8, 9, 0]));
