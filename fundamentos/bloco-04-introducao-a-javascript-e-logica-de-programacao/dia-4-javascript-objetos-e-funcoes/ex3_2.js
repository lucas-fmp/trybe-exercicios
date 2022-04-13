function higherNumber() {
  let array = [2, 4, 6, 7, 10, 0, -3];
  let min = Math.min(...array);
  let index = array.indexOf(min)
  return index
}

console.log(higherNumber())