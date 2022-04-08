let array = ['java', 'javascript', 'python', 'html', 'css'];
let string = '';
let arrayNumbers = [];
let max = 0;

for (let index = 0; index < array.length; index += 1) {
  string = array[index]
  arrayNumbers.push(string.length)
}

max = Math.max(...arrayNumbers);
let indexMax = arrayNumbers.indexOf(max);

console.log(array[indexMax]);