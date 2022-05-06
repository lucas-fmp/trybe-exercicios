const biggestWord = (phrase) => {
  let array = [];
  let big = '';
  array.push(phrase.split(' '));
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > big.length) {
      big = array[i];
      return big;
    }
  }
  return big;
}

console.log(biggestWord('O rato roeu a roupa do rei de roma!'));