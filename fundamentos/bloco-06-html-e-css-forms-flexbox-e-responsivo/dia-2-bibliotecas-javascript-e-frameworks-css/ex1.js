const buttonSend = document.querySelector('#buttonSend');
const agree2 = document.querySelector('#agree2');
const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');

buttonSend.addEventListener('click', (event) => {
  if (inputName.value.length < 10 || inputEmail.value.length < 10) {
    alert('Dados Inválidos');
    event.preventDefault();
  } else if (agree2.checked === false) {
    event.preventDefault();
  } else if (inputName.value.length >= 10 && inputName.value.length <= 40 && inputEmail.value.length >= 10 && inputEmail.value.length <= 50) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
  }
});
