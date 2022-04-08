let array = ['java', 'javascript', 'python', 'html', 'css'];
let string = '';
let arrayNumbers = [];
let min = 0;

for (let index = 0; index < array.length; index += 1) {
  string = array[index]
  arrayNumbers.push(string.length)
}

min = Math.min(...arrayNumbers);
let indexMin = arrayNumbers.indexOf(min);

console.log(array[indexMin]);