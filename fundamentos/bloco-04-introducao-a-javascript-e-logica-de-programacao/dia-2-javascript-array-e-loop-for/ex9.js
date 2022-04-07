let array = [];
let halfNumbers = [];

for (index = 1; index < 26; index += 1) {
  array.push(index)
}

for (let numbers of array) {
  halfNumbers.push(numbers / 2)
}

console.log(halfNumbers);