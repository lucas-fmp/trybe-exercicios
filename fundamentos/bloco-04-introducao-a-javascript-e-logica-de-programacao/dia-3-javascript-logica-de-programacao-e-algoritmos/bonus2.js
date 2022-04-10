let n = 10;
let aux = '';

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
    if (index == index2) {
      aux += '*'
    }
  }
  console.log(aux);
}