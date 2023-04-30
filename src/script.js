import Keyboard from './components/keyboard.js';
import createElement from './components/utils.js';

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
