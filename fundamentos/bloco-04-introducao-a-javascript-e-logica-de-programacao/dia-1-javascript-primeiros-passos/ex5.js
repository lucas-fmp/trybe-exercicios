const firstAngle = -60;
const secondAngle = -60;
const thirdAngle = -60;
const soma = firstAngle + secondAngle + thirdAngle;

if ((soma > 180 || soma < 180) && soma > 0) {
  console.log(false)
}
else if (soma == 180) {
  console.log(true)
}
else {
  console.log("error")
};