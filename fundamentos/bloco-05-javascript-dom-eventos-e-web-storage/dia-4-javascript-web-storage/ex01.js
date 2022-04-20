let paragraph = document.querySelector('#paragraph');
let textArea = document.querySelector('#inputText');

// Adicionando o texto
textArea.addEventListener('change', function () {
  localStorage.setItem('textArea', textArea.value);
  paragraph.innerText = localStorage.getItem('textArea');
});

// Alterando a cor do fundo do texto
let bGColor = document.querySelector('#backgroundColor');
bGColor.addEventListener('change', function() {
  localStorage.setItem('bGColor', bGColor.value);
  paragraph.style.backgroundColor = localStorage.getItem('bGColor');
});

// Alterando a cor do texto
let textColor = document.querySelector('#textColor');
textColor.addEventListener('change', function() {
  localStorage.setItem('textColor', textColor.value);
  paragraph.style.color = localStorage.getItem('textColor');
});

// Alterando o tamanho da fonte
let fontSizes = document.querySelector('#fontSize');
fontSizes.addEventListener('change', function() {
  localStorage.setItem('fontSizes', fontSizes.value);
  paragraph.style.fontSize = localStorage.getItem('fontSizes') + 'px'
});

// Alterando o espaçamento entre as linhas
let lineSpacing = document.querySelector('#lineSpacing');
lineSpacing.addEventListener('change', function() {
  localStorage.setItem('lineSpacing', lineSpacing.value);
  paragraph.style.lineHeight = localStorage.getItem('lineSpacing') + 'px';
});

// Alterando o tipo da fonte
let fontFamily1 = document.querySelector('#fontFamily');
fontFamily1.addEventListener('change', function() {
  localStorage.setItem('fontFamily1', fontFamily1.value);
  paragraph.style.fontFamily = localStorage.getItem('fontFamily1');
});

// Renderização inicial, para pegar os dados salvos no localStorage
function initialRenderization() {
  paragraph.innerText = localStorage.getItem('textArea');
  paragraph.style.backgroundColor = localStorage.getItem('bGColor');
  paragraph.style.color = localStorage.getItem('textColor');
  paragraph.style.fontSize = localStorage.getItem('fontSizes') + 'px';
  paragraph.style.lineHeight = localStorage.getItem('lineSpacing') + 'px';
  paragraph.style.fontFamily = localStorage.getItem('fontFamily1');
}

window.onload = function () {
  initialRenderization();
}