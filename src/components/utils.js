export function createElement(tag, classes) {
  const el = document.createElement(tag);
  el.classList.add(...classes);

  return el;
}

export function addText(index, value, text) {
  return value.slice(0, index) + text + value.slice(index);
}

export function deleteText(index, value) {
  if (index < 0) {
    return value;
  }

  return value.slice(0, index) + value.slice(index + 1);
}
