let salarioBruto = 1200;
let inss;
let ir;
let salarioLiquido;
let salarioBase;

if (salarioBruto <= 1556.94 && salarioBruto >= 0) {
  inss = salarioBruto * 0.08
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11
}
else if (salarioBruto > 5189.82) {
  inss = 570.88
}

salarioBase = salarioBruto - inss;

if (salarioBase > 0 && salarioBase <= 1903.98) {
  ir = 0
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13
}
else if (salarioBase > 4664.68) {
  ir = (salarioBase * 0.275) - 869.36
}

salarioLiquido = salarioBase - ir;

if (salarioLiquido > 0) {
  console.log("O salário líquido a ser recebido é de R$" + salarioLiquido.toFixed(2))
}
else {
  console.log("Error")
};