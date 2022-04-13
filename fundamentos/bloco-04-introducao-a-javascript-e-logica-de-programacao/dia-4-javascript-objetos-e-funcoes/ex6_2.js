function sum(number) {
  let numbers = [];
  for (let index = 1; index <= number; index += 1) {
    numbers.push(index)
  }
  let sum = 0;
  for (let value of numbers) {
    sum += value
  }
  return sum
}

console.log (sum(5));