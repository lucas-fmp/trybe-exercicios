// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex8");

const test1 = getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (error, message) => {
  if (error) {
    return error;
  } else {
    return message;
  }
})

const test2 = getPokemonDetails((pokemon) => pokemon.name === 'Charmander', (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
})

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expError = new Error('Não temos esse pokémon para você :(');

    const callback = (error, result) => {
      expect(error).toEqual(expError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (error, result) => {
      expect(result).toBe(expString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});