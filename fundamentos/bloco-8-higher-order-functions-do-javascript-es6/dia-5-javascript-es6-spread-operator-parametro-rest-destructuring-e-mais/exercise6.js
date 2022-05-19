const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (car) => {
  const [model, carmaker, year] = car;
  return {
    model,
    carmaker,
    year
  }
}

console.log(toObject(palio));