const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', (event2) => {
  event2.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', (event3) => {
  if (event3.key !== 'a') {
    event3.preventDefault();
  }
});
