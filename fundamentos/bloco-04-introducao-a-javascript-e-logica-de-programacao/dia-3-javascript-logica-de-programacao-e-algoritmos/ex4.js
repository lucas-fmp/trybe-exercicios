let numbers = [];
let primeNumbers = [];
let biggestPrimeNumber = [];

for (let index = 1; index <= 50; index += 1) {
  numbers = index
  for (let divisor = 2; divisor < numbers; divisor += 1) {
    if (numbers % divisor === 0) {
      break;
    }
    else {
      primeNumbers.push(numbers);
      break;
    }
  }
}

biggestPrimeNumber = Math.max(...primeNumbers);

console.log(biggestPrimeNumber);