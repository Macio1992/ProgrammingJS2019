/* Stwórz funkcję, która jako parametr przyjmie liczbę, usunie ją z tablicy, zwróć tablice po usunieciu */

const array = [4, 5, 6, 7, 1, 3, 45, 67];

function removeElement(indexToRemove, deleteCount) {
  array.splice(indexToRemove, deleteCount);
}
