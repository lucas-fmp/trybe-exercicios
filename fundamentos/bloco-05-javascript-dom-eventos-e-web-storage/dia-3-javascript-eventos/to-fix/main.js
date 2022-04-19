const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: Porque nesse caso, no CSS, apenas a classe dessa caixa é alterada para mudar o nível em Y.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let li = document.querySelectorAll("li");

if (li[0]) {
  li[0].addEventListener("click", function (evento) {
    li[0].classList.add('tech');
    li[1].classList.remove('tech');
    li[2].classList.remove('tech');
    });
}
if (li[1]) {
  li[1].addEventListener("click", function (evento) {
    li[1].classList.add('tech');
    li[0].classList.remove('tech');
    li[2].classList.remove('tech');
    });
}
if (li[2]) {
  li[2].addEventListener("click", function (evento) {
    li[2].classList.add('tech');
    li[1].classList.remove('tech');
    li[0].classList.remove('tech');
    });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let inputText = document.querySelector('input');
inputText.addEventListener("change", function() {
  document.querySelector('.tech').innerText = inputText.value;
})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let meuTop3 = document.querySelector('#my-spotrybefy');
meuTop3.addEventListener("dblclick", function(){
  window.open('https://github.com/lucas-fmp','_blank');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

meuTop3.addEventListener("mouseover", function() {
  meuTop3.style.color = '#2fc18c';
})
meuTop3.addEventListener("mouseleave", function() {
  meuTop3.style.color = 'white';
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.