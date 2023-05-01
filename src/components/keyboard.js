import enumCssStyle from '../enums/enumCssStyle.js';
import * as Utils from './utils.js';
import keyCodes from '../enums/keyCodes.js';

class keyboard {
  constructor(lang) {
    this.keyboard = Utils.createElement('section', [enumCssStyle.KEYBOARD]);
    this.btns = [];
    this.caps = false;
    this.lang = lang;

    keyCodes.forEach((line) => {
      const row = Utils.createElement('div', [enumCssStyle.ROW]);

      Object.entries(line).forEach((item) => {
        const [key, obj] = item;
        const div = Utils.createElement('div', [enumCssStyle.BTN, key]);

        Object.entries(obj).forEach((el) => {
          const [currentlang, values] = el;
          const span = currentlang === this.lang ? Utils.createElement('span', [currentlang]) : Utils.createElement('span', [currentlang, enumCssStyle.HIDDEN]);

          for (let i = 0; i < 2; i += 1) {
            const classValue = i === 0 ? enumCssStyle.LOWER_CASE : enumCssStyle.UPPER_CASE;
            const value = i === 0 ? Utils.createElement('span', [classValue]) : Utils.createElement('span', [classValue, enumCssStyle.HIDDEN]);
            value.innerHTML = values[i];
            span.append(value);
          }

          div.append(span);
        });

        row.append(div);
        this.btns.push(div);
      });

      this.keyboard.append(row);
    });
  }

  switchLang() {
    this.btns.forEach((btn) => {
      btn.childNodes.forEach((item) => {
        item.classList.toggle(enumCssStyle.HIDDEN);
      });
    });

    if (this.lang === 'eng') {
      this.lang = 'rus';
    } else {
      this.lang = 'eng';
    }

    if (this.caps) {
      this.switchCase();
    }
  }

  switchCase() {
    this.btns.forEach((btn) => {
      btn.childNodes.forEach((item) => {
        if (!item.classList.contains(enumCssStyle.HIDDEN)) {
          item.childNodes.forEach((el) => {
            el.classList.toggle(enumCssStyle.HIDDEN);
          });
        }
      });
    });

    if (this.caps) {
      this.caps = false;
    } else {
      this.caps = true;
    }
  }

  getKeyboard() {
    return this.keyboard;
  }

  getLanguage() {
    return this.lang;
  }
}

export default keyboard;
