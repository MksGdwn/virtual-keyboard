import enumCssStyle from './enumCssStyle.js';
import createElement from './utils.js';
import keyCodes from './keyCodes.js';

class keyboard {
  constructor() {
    this.keyboard = createElement('section', [enumCssStyle.KEYBOARD]);
    this.btns = [];

    keyCodes.forEach((line) => {
      const row = createElement('div', [enumCssStyle.ROW]);

      Object.entries(line).forEach((item) => {
        const [key, obj] = item;
        const div = createElement('div', [enumCssStyle.BTN, key]);

        Object.entries(obj).forEach((el) => {
          const [lang, values] = el;
          const span = lang === 'eng' ? createElement('span', [lang]) : createElement('span', [lang, enumCssStyle.HIDDEN]);

          for (let i = 0; i < 2; i += 1) {
            const classValue = i === 0 ? enumCssStyle.LOWER_CASE : enumCssStyle.UPPER_CASE;
            const value = i === 0 ? createElement('span', [classValue]) : createElement('span', [classValue, enumCssStyle.HIDDEN]);
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
}
export default keyboard;
