/* Stwórz funkcję, która jako parametr przyjmie liczbę, usunie ją z tablicy, zwróć tablice po usunieciu */

let tablica = [4, 5, 6, 7, 1, 3, 45, 67];

console.log(tablica);

function removeElement(indexToRemove, deleteCount) {
  tablica.splice(indexToRemove, deleteCount);
}

removeElement(4, 1);

console.log(tablica);
