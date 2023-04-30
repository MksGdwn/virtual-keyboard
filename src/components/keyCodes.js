const keyCodes = [{
  Backquote: {
    eng: ['`', '~'],
    rus: ['ё', 'Ё'],
  },
  Digit1: {
    eng: ['1', '!'],
    rus: ['1', '!'],
  },
  Digit2: {
    eng: ['2', '@'],
    rus: ['2', '"'],
  },
  Digit3: {
    eng: ['3', '#'],
    rus: ['3', '№'],
  },
  Digit4: {
    eng: ['4', '$'],
    rus: ['4', ';'],
  },
  Digit5: {
    eng: ['5', '%'],
    rus: ['5', '%'],
  },
  Digit6: {
    eng: ['6', '^'],
    rus: ['6', ':'],
  },
  Digit7: {
    eng: ['7', '&'],
    rus: ['7', '?'],
  },
  Digit8: {
    eng: ['8', '*'],
    rus: ['8', '*'],
  },
  Digit9: {
    eng: ['9', '('],
    rus: ['9', '('],
  },
  Digit0: {
    eng: ['0', ')'],
    rus: ['0', ')'],
  },
  Minus: {
    eng: ['-', '_'],
    rus: ['-', '_'],
  },
  Equal: {
    eng: ['=', '+'],
    rus: ['=', '+'],
  },
  Backspace: {
    eng: ['Backspace', 'Backspace'],
    rus: ['Backspace', 'Backspace'],
  },
},
{
  Tab: {
    eng: ['Tab', 'Tab'],
    rus: ['Tab', 'Tab'],
  },
  KeyQ: {
    eng: ['q', 'Q'],
    rus: ['й', 'Й'],
  },
  KeyW: {
    eng: ['w', 'W'],
    rus: ['ц', 'Ц'],
  },
  KeyE: {
    eng: ['e', 'E'],
    rus: ['у', 'У'],
  },
  KeyR: {
    eng: ['r', 'R'],
    rus: ['к', 'К'],
  },
  KeyT: {
    eng: ['t', 'T'],
    rus: ['е', 'Е'],
  },
  KeyY: {
    eng: ['y', 'Y'],
    rus: ['н', 'Н'],
  },
  KeyU: {
    eng: ['u', 'U'],
    rus: ['г', 'Г'],
  },
  KeyI: {
    eng: ['i', 'I'],
    rus: ['ш', 'Ш'],
  },
  KeyO: {
    eng: ['o', 'O'],
    rus: ['щ', 'Щ'],
  },
  KeyP: {
    eng: ['p', 'P'],
    rus: ['з', 'З'],
  },
  BracketLeft: {
    eng: ['[', '['],
    rus: ['х', 'Х'],
  },
  BracketRight: {
    eng: [']', ']'],
    rus: ['ъ', 'Ъ'],
  },
  Backslash: {
    eng: ['\\', '|'],
    rus: ['\\', '/'],
  },
  Delete: {
    eng: ['Del', 'Del'],
    rus: ['Del', 'Del'],
  },
},
{
  CapsLock: {
    eng: ['Caps', 'Caps'],
    rus: ['Caps', 'Caps'],
  },
  KeyA: {
    eng: ['a', 'A'],
    rus: ['ф', 'Ф'],
  },
  KeyS: {
    eng: ['s', 'S'],
    rus: ['ы', 'Ы'],
  },
  KeyD: {
    eng: ['d', 'D'],
    rus: ['в', 'В'],
  },
  KeyF: {
    eng: ['f', 'F'],
    rus: ['а', 'А'],
  },
  KeyG: {
    eng: ['g', 'G'],
    rus: ['п', 'П'],
  },
  KeyH: {
    eng: ['h', 'H'],
    rus: ['р', 'Р'],
  },
  KeyJ: {
    eng: ['j', 'J'],
    rus: ['о', 'О'],
  },
  KeyK: {
    eng: ['k', 'K'],
    rus: ['л', 'Л'],
  },
  KeyL: {
    eng: ['l', 'L'],
    rus: ['д', 'Д'],
  },
  Semicolon: {
    eng: [';', ':'],
    rus: ['ж', 'Ж'],
  },
  Quote: {
    eng: ['\'', '"'],
    rus: ['э', 'Э'],
  },
  Enter: {
    eng: ['Enter', 'Enter'],
    rus: ['Enter', 'Enter'],
  },
},
{
  ShiftLeft: {
    eng: ['Shift', 'Shift'],
    rus: ['Shift', 'Shift'],
  },
  KeyZ: {
    eng: ['z', 'Z'],
    rus: ['я', 'Я'],
  },
  KeyX: {
    eng: ['x', 'X'],
    rus: ['ч', 'Ч'],
  },
  KeyC: {
    eng: ['c', 'C'],
    rus: ['с', 'С'],
  },
  KeyV: {
    eng: ['v', 'V'],
    rus: ['м', 'М'],
  },
  KeyB: {
    eng: ['b', 'B'],
    rus: ['и', 'И'],
  },
  KeyN: {
    eng: ['n', 'N'],
    rus: ['т', 'Т'],
  },
  KeyM: {
    eng: ['m', 'M'],
    rus: ['ь', 'Ь'],
  },
  Comma: {
    eng: [',', '<'],
    rus: ['б', 'Б'],
  },
  Period: {
    eng: ['.', '>'],
    rus: ['ю', 'Ю'],
  },
  Slash: {
    eng: ['/', '?'],
    rus: ['.', ','],
  },
  ArrowUp: {
    eng: ['▲', '▲'],
    rus: ['▲', '▲'],
  },
  ShiftRight: {
    eng: ['Shift', 'Shift'],
    rus: ['Shift', 'Shift'],
  },
},
{
  ControlLeft: {
    eng: ['Ctrl', 'Ctrl'],
    rus: ['Ctrl', 'Ctrl'],
  },
  OSLeft: {
    eng: ['Win', 'Win'],
    rus: ['Win', 'Win'],
  },
  AltLeft: {
    eng: ['Alt', 'Alt'],
    rus: ['Alt', 'Alt'],
  },
  Space: {
    eng: ['Space', 'Space'],
    rus: ['Space', 'Space'],
  },
  AltRight: {
    eng: ['Alt', 'Alt'],
    rus: ['Alt', 'Alt'],
  },
  ArrowLeft: {
    eng: ['◄', '◄'],
    rus: ['◄', '◄'],
  },
  ArrowDown: {
    eng: ['▼', '▼'],
    rus: ['▼', '▼'],
  },
  ArrowRight: {
    eng: ['►', '►'],
    rus: ['►', '►'],
  },
  ControlRight: {
    eng: ['Ctrl', 'Ctrl'],
    rus: ['Ctrl', 'Ctrl'],
  },
}];

export default keyCodes;
