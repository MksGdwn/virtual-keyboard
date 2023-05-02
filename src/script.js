import Keyboard from './components/keyboard.js';
import * as Utils from './components/utils.js';
import enumCssStyle from './enums/enumCssStyle.js';
import enumKeys from './enums/enumKeys.js';

const keyboardLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng';

const body = document.querySelector('body');
const main = document.createElement('main');
const wrapper = Utils.createElement('div', [enumCssStyle.WRAPPER]);
const header = Utils.createElement('h1', [enumCssStyle.HEADER]);
header.innerText = 'Виртуальная клавиатура';
const desc = Utils.createElement('p', [enumCssStyle.DESC]);
desc.innerText = 'Клавиатура создана в операционной системе Window';
const lang = Utils.createElement('p', [enumCssStyle.LANG]);
lang.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

const textarea = Utils.createElement('textarea', [enumCssStyle.TEXTAREA]);
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

function clickEnter(start) {
  textarea.value = Utils.addText(start, textarea.value, '\n');
  textarea.setSelectionRange(start + 1, start + 1);
}

function clickTab(start) {
  textarea.value = Utils.addText(start, textarea.value, '\t');
  textarea.setSelectionRange(start + 1, start + 1);
}

function clickBackspace(start, end) {
  let index = end - start ? start : start - 1;
  if (index < 0) {
    index = 0;
  }
  textarea.setRangeText('', index, end);
  textarea.setSelectionRange(index, index);
}

function clickDelete(start, end) {
  const index = end - start ? end : end + 1;
  textarea.setRangeText('', start, index);
  textarea.setSelectionRange(start, start);
}

function clickSpace(start) {
  textarea.value = Utils.addText(start, textarea.value, ' ');
  textarea.setSelectionRange(start + 1, start + 1);
}

keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (key.innerText.length === 1) {
      textarea.value = Utils.addText(start, textarea.value, key.innerText);
      textarea.setSelectionRange(start + 1, start + 1);
    }

    if (key.classList.contains(enumKeys.CAPSLOCK)) {
      keyboard.switchLetterCase();
      key.classList.toggle('active');
    }

    if ((key.classList.contains(enumKeys.CTRL_LEFT) && event.altKey)
        || (key.classList.contains(enumKeys.ALT_LEFT) && event.ctrlKey)) {
      keyboard.switchLang();
    }

    if (key.classList.contains(enumKeys.SPACE)) {
      clickSpace(start);
    }

    if (key.classList.contains(enumKeys.TAB)) {
      clickTab(start);
    }

    if (key.classList.contains(enumKeys.ENTER)) {
      clickEnter(start);
    }

    if (key.classList.contains(enumKeys.BACKSPACE)) {
      clickBackspace(start, end);
    }

    if (key.classList.contains(enumKeys.DELETE)) {
      clickDelete(start, end);
    }
  });
});

function holdShift(key) {
  if (key.classList.contains(enumKeys.SHIFT_LEFT) || key.classList.contains(enumKeys.SHIFT_RIGHT)) {
    keyboard.switchCase();
  }
}

keys.forEach((key) => {
  key.addEventListener('mousedown', () => holdShift(key));
});

keys.forEach((key) => {
  key.addEventListener('mouseup', () => holdShift(key));
});

body.addEventListener('keydown', (event) => {
  keys.forEach((key) => {
    event.preventDefault();

    if (key.classList.contains(event.code)) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (key.innerText.length === 1) {
        textarea.value = Utils.addText(start, textarea.value, key.innerText);
        textarea.setSelectionRange(start + 1, start + 1);
      }

      if (event.code === enumKeys.CAPSLOCK) {
        keyboard.switchLetterCase();
        key.classList.toggle('active');
      } else {
        key.classList.add('active');
      }

      if (event.ctrlKey && event.altKey) {
        keyboard.switchLang();
      }

      if (event.key === enumKeys.SHIFT && !event.repeat) {
        keyboard.switchCase();
      }

      if (event.code === enumKeys.SPACE) {
        clickSpace(start);
      }

      if (event.code === enumKeys.TAB) {
        clickTab(start);
      }

      if (event.code === enumKeys.ENTER) {
        clickEnter(start);
      }

      if (event.code === enumKeys.BACKSPACE) {
        clickBackspace(start, end);
      }

      if (event.code === enumKeys.DELETE) {
        clickDelete(start, end);
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
