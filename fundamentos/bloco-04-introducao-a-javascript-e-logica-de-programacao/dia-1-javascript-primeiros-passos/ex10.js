const custo = 10;
const imposto = 0.2;
const custoTotal = (custo * (1 + imposto));
const venda = 15;
const lucroUnitario = venda - custoTotal;
const numeroDeVendas = 1000;
const lucroTotal = lucroUnitario * numeroDeVendas

if (custo >= 0 && venda >= 0) {
  console.log("O lucro referente a venda de mil produtos é de: " + lucroTotal.toFixed(2));
}
else {
  console.log("Error")
};