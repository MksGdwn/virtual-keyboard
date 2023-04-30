import Keyboard from './components/keyboard.js';
import createElement from './components/utils.js';

const body = document.querySelector('body');
const main = document.createElement('main');
const wrapper = createElement('div', ['wrapper']);
const keyboard = new Keyboard();
body.append(main);
main.append(wrapper);
wrapper.append(keyboard.keyboard);
