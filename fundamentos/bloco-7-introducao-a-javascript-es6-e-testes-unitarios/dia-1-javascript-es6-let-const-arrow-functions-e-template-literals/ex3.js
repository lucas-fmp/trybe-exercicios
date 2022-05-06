const fatorial = (number) => {
  if (number < 0) {
    return 'Erro'
  } else if (number === 0) {
    return 1;
  } else if (number > 0) {
    let resultado = number
    for (let i = 1; i < number; i += 1) {
      resultado *= i;
    }
    return resultado;
  }
}

console.log(fatorial(5));