const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('passado "teste" como parametro, espera-se "TESTE" como resultado', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});