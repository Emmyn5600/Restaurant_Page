export default class Element {
  create(name) {
    this.elm = document.createElement(name);
    return this;
  }

  createText(text) {
    this.elm = document.createTextNode(text);
    return this;
  }

  class(classes) {
    this.elm.setAttribute('class', classes);
    return this;
  }

  id(id) {
    this.elm.setAttribute('id', id);
    return this;
  }

  element() {
    return this.elm;
  }

  appendTo(parent) {
    parent.appendChild(this.elm);
    return this;
  }
}