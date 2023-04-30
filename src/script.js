import Keyboard from './components/keyboard.js';
import createElement from './components/utils.js';
import enumCssStyle from './components/enumCssStyle.js';

const keyboardLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';

const body = document.querySelector('body');
const main = document.createElement('main');
const wrapper = createElement('div', ['wrapper']);
const desc = createElement('p', ['desc']);
desc.innerText = 'Клавиатура создана в операционной системе Window';
const lang = createElement('p', ['lang']);
lang.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

const textarea = createElement('textarea', ['textarea']);
textarea.setAttribute('rows', 10);
textarea.setAttribute('cols', 50);

const keyboard = new Keyboard(keyboardLang);

body.append(main);
main.append(wrapper);
wrapper.append(textarea);
wrapper.append(keyboard.getKeyboard());
wrapper.append(desc);
wrapper.append(lang);

const keys = document.querySelectorAll(`.${enumCssStyle.BTN}`);

function inputNewText(index, value, text) {
  const result = value.slice(0, index) + text + value.slice(index);

  return result;
}

function deleteText(index, value) {
  if (index < 0) {
    return value;
  }

  return value.slice(0, index) + value.slice(index + 1);
}

keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    if (key.innerText.length === 1) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, key.innerText);
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains('CapsLock')) {
      keyboard.switchCase();
      key.classList.toggle('active');
    }

    if (key.classList.contains('Tab')) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, '\t');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains('Enter')) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, '\n');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains('Backspace')) {
      let start = textarea.selectionStart - 1;
      textarea.value = deleteText(start, textarea.value);
      if (start < 0) {
        start = 0;
      }
      textarea.setSelectionRange(start, start);
    }

    if (key.classList.contains('Delete')) {
      const start = textarea.selectionStart;
      textarea.value = deleteText(start, textarea.value);
      textarea.setSelectionRange(start, start);
    }

    if (key.classList.contains('Space')) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, ' ');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if ((key.classList.contains('ControlLeft') && event.altKey)
        || (key.classList.contains('AltLeft') && event.ctrlKey)) {
      keyboard.switchLang();
    }
  });
});

keys.forEach((key) => {
  key.addEventListener('mousedown', () => {
    if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
      keyboard.switchCase();
    }
  });
});

keys.forEach((key) => {
  key.addEventListener('mouseup', () => {
    if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
      keyboard.switchCase();
    }
  });
});

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      if (event.code === 'CapsLock') {
        keyboard.switchCase();
        key.classList.toggle('active');
      } else {
        key.classList.add('active');
      }

      if (key.innerText.length === 1) {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, key.innerText);
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.ctrlKey && event.altKey) {
        keyboard.switchLang();
      }

      if (event.key === 'Shift' && !event.repeat) {
        keyboard.switchCase();
      }

      if (event.code === 'Tab') {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, '\t');
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.code === 'Enter') {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, '\n');
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.code === 'Backspace') {
        let start = textarea.selectionStart - 1;
        textarea.value = deleteText(start, textarea.value);
        if (start < 0) {
          start = 0;
        }
        textarea.setSelectionRange(start, start);
      }

      if (event.code === 'Delete') {
        const start = textarea.selectionStart;
        textarea.value = deleteText(start, textarea.value);
        textarea.setSelectionRange(start, start);
      }

      if (event.code === 'Space') {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, ' ');
        textarea.setSelectionRange(start + 1, start + 1);
      }
    }
  });
});

body.addEventListener('keyup', (event) => {
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      if (event.code !== 'CapsLock') {
        key.classList.remove('active');
      }

      if (event.key === 'Shift') {
        keyboard.switchCase();
      }
    }
  });
});

function setLocalStorage() {
  localStorage.setItem('lang', keyboard.getLanguage());
}

window.addEventListener('beforeunload', setLocalStorage);
