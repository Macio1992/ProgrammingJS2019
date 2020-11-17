function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    // if (literka istnieje w tablicy vowels)
    // counter++
    if (vowels.indexOf(word[i]) !== -1) {
      counter++;
    }
  }

  return counter;
}
