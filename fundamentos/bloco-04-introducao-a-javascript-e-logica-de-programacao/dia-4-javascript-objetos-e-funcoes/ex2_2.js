function higherNumber() {
  let array = [2, 3, 6, 7, 10, 1];
  let max = Math.max(...array);
  let index = array.indexOf(max)
  return index
}

console.log(higherNumber())