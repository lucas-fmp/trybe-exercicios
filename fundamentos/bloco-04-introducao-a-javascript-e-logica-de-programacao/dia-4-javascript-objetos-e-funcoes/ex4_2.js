function biggestName () {
  let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let numbersOfLetters = [];
  for (let name of names) {
    numbersOfLetters.push(name.length)
  };
  let maxLetters = Math.max(...numbersOfLetters);
  let index = numbersOfLetters.indexOf(maxLetters);
  return names[index]
}

console.log(biggestName())