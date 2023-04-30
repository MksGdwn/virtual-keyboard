import Keyboard from './components/keyboard.js';
import createElement from './components/utils.js';
import enumCssStyle from './components/enumCssStyle.js';

const body = document.querySelector('body');
const main = document.createElement('main');
const wrapper = createElement('div', ['wrapper']);

const textarea = createElement('textarea', ['textarea']);
textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);

const keyboard = new Keyboard();

body.append(main);
main.append(wrapper);
wrapper.append(textarea);
wrapper.append(keyboard.keyboard);

const keys = document.querySelectorAll(`.${enumCssStyle.BTN}`);

function inputNewText(index, value, text) {
  const result = value.slice(0, index) + text + value.slice(index);

  return result;
}

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.innerText.length === 1) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, key.innerText);
      textarea.setSelectionRange(start + 1, start + 1);
    }
  });
});

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      key.classList.add('active');

      if (key.innerText.length === 1) {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, key.innerText);
        textarea.setSelectionRange(start + 1, start + 1);
      }
    }
  });
});

body.addEventListener('keyup', (event) => {
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      key.classList.remove('active');
    }
  });
});
