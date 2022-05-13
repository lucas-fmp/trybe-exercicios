const draw = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 6);
  return callback(number, randomNumber);
};

const verification = (number, randomNumber) => {
  if (randomNumber === number) {
    console.log('Parabéns você ganhou')
  } else {
    console.log('Tente novamente')
  }
};

draw(3, verification);