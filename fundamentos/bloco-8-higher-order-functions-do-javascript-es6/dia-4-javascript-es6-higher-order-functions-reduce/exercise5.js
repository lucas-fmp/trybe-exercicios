const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => {
    cur.split('').forEach((element) => {
      if (element === 'a' || element === 'A') {
        acc += 1;
      }
    })
    return acc;
  }, 0)
}

console.log(containsA());
