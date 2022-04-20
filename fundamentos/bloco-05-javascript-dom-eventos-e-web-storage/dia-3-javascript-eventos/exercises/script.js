function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Exercício 1
let days = document.querySelector('#days');
for (i = 0; i < dezDaysList.length; i += 1) {
  let li = document.createElement('li');
  li.innerText = dezDaysList[i];
  li.className = 'day'
  days.appendChild(li);
};

let lis = document.querySelectorAll('#days li');
lis[25].classList.add('holiday');
lis[26].classList.add('holiday');
lis[32].classList.add('holiday');
lis[5].classList.add('friday');
lis[12].classList.add('friday');
lis[19].classList.add('friday');
lis[26].classList.add('friday');

// Exercício 2
function buttonMakerHoliday(buttonName) {
  let button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerText = buttonName
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(button);
}

buttonMakerHoliday('Feriados');

// Exercício 3 (não acabado, nao consigo voltar pra branco e está dando um erro no console)
let button = document.querySelector('#btn-holiday');
button.addEventListener("click", function () {
  let holiday = document.querySelectorAll('.holiday');
  for (let item in holiday) {
    holiday[item].style.backgroundColor = 'lightGreen'
  }
});

// Exercício 4
function buttonMakerFriday(buttonName) {
  let button = document.createElement('button');
  button.setAttribute('id', 'btn-friday');
  button.innerText = buttonName
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(button);
}

buttonMakerFriday('Sexta-feira');

// Exercício 5 (Não acabado, mesma coisa do 3, não sei voltar)
let buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener("click", function () {
  let friday = document.querySelectorAll('.friday');
  for (let item in friday) {
    friday[item].innerText = 'SEXTOU!'
  }
});

// Exercício 6
let listElements = document.querySelectorAll('.day');

for (let i = 0; i < listElements.length; i += 1) {
  listElements[i].addEventListener('mouseover', function(event) {
    let day = event.target
    day.style.fontSize = 'xx-large'
  });
  listElements[i].addEventListener('mouseout', function(event) {
    let day = event.target
    day.style.fontSize = 'medium'
  });
};

// Exercício 7
function addTask(task) {
  let tasks = document.createElement('span');
  tasks.innerText = task
  let taskContainer = document.querySelector('.my-tasks');
  taskContainer.appendChild(tasks);
}

addTask("Cozinhar:");

// Exercício 8
function addColor(color) {
  let div = document.createElement('div');
  div.setAttribute('class', 'task');
  div.style.backgroundColor = color;
  let taskContainer = document.querySelector('.my-tasks');
  taskContainer.appendChild(div);
}

addColor('red');

// Exercício 9 (Não acabado, mesma coisa do 3, não sei voltar)
let listOfTasks = document.querySelectorAll('.task')
for (i = 0; i < listOfTasks.length; i += 1) {
  listOfTasks[i].addEventListener('click', function(event) {
    event.target.classList.add('selected')
  })
}

// Exercício 10
