let liczby = [3, 5, 7];
let liczba;

console.log("Przed ", liczby);

do {
  liczba = Math.floor((Math.random() * 10) + 0);
}
while (liczby.indexOf(liczba) > -1);


liczby.push(liczba);


console.log("Po ", liczby);
