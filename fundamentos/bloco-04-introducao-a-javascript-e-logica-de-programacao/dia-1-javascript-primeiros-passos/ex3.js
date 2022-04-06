const a = 30;
const b = 10;
const c = 20;

if (a > b && a > c) {
  console.log("O maior valor é: " + a)
}
else if (b > a && b > c) {
  console.log("O maior valor é: " + b)
} 
else if (c > a && c > b) {
  console.log("O maior valor é: " + c)
}
else {
  console.log("Os três valores são iguais")
};