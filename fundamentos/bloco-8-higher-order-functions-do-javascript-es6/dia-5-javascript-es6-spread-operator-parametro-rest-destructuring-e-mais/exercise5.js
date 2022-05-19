const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (array) => {
  const [ firstNumber, secondNumber, thirdNumber ] = array;
  return [thirdNumber, secondNumber, firstNumber];
}

console.log(swap(myList));