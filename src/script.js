import Keyboard from './components/keyboard.js';
import createElement from './components/utils.js';
import enumCssStyle from './components/enumCssStyle.js';
import enumKeys from './components/enumKeys.js';

const keyboardLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';

const body = document.querySelector('body');
const main = document.createElement('main');
const wrapper = createElement('div', ['wrapper']);
const header = createElement('h1', ['header']);
header.innerText = 'Виртуальная клавиатура';
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
wrapper.append(header);
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

    if (key.classList.contains(enumKeys.CAPSLOCK)) {
      keyboard.switchCase();
      key.classList.toggle('active');
    }

    if (key.classList.contains(enumKeys.TAB)) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, '\t');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains(enumKeys.ENTER)) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, '\n');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains(enumKeys.BACKSPACE)) {
      let start = textarea.selectionStart - 1;
      textarea.value = deleteText(start, textarea.value);
      if (start < 0) {
        start = 0;
      }
      textarea.setSelectionRange(start, start);
    }

    if (key.classList.contains(enumKeys.DELETE)) {
      const start = textarea.selectionStart;
      textarea.value = deleteText(start, textarea.value);
      textarea.setSelectionRange(start, start);
    }

    if (key.classList.contains(enumKeys.SPACE)) {
      const start = textarea.selectionStart;
      textarea.value = inputNewText(start, textarea.value, ' ');
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if ((key.classList.contains(enumKeys.CTRL_LEFT) && event.altKey)
        || (key.classList.contains(enumKeys.ALT_LEFT) && event.ctrlKey)) {
      keyboard.switchLang();
    }
  });
});

keys.forEach((key) => {
  key.addEventListener('mousedown', () => {
    if (key.classList.contains(enumKeys.SHIFT_LEFT)
        || key.classList.contains(enumKeys.SHIFT_RIGHT)) {
      keyboard.switchCase();
    }
  });
});

keys.forEach((key) => {
  key.addEventListener('mouseup', () => {
    if (key.classList.contains(enumKeys.SHIFT_LEFT)
        || key.classList.contains(enumKeys.SHIFT_RIGHT)) {
      keyboard.switchCase();
    }
  });
});

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      if (event.code === enumKeys.CAPSLOCK) {
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

      if (event.key === enumKeys.SHIFT && !event.repeat) {
        keyboard.switchCase();
      }

      if (event.code === enumKeys.TAB) {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, '\t');
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.code === enumKeys.ENTER) {
        const start = textarea.selectionStart;
        textarea.value = inputNewText(start, textarea.value, '\n');
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.code === enumKeys.BACKSPACE) {
        let start = textarea.selectionStart - 1;
        textarea.value = deleteText(start, textarea.value);
        if (start < 0) {
          start = 0;
        }
        textarea.setSelectionRange(start, start);
      }

      if (event.code === enumKeys.DELETE) {
        const start = textarea.selectionStart;
        textarea.value = deleteText(start, textarea.value);
        textarea.setSelectionRange(start, start);
      }

      if (event.code === enumKeys.SPACE) {
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
      if (event.code !== enumKeys.CAPSLOCK) {
        key.classList.remove('active');
      }

      if (event.key === enumKeys.SHIFT) {
        keyboard.switchCase();
      }
    }
  });
});

function setLocalStorage() {
  localStorage.setItem('lang', keyboard.getLanguage());
}

window.addEventListener('beforeunload', setLocalStorage);
