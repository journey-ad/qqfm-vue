export function hasClass(el, className) {
  return el.classList.classList.contains(className)
}

export function addClass(el, className) {
  el.classList.add(className)
}

export function getData(el, name, val) {
  if (val) {
    return el.dataset[name] = val
  } else {
    return el.dataset[name]
  }
}