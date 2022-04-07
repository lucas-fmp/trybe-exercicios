const custo = 10;
const imposto = 0.2;
const custoTotal = (custo * (1 + imposto));
const venda = 5;
const lucro = venda - custoTotal;

if (custo >= 0 && venda >= 0) {
    console.log("O lucro referente a venda de mil produtos é de: " + (1000 * lucro).toFixed(2));
}
else {
    console.log("Error")
};