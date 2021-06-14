// import your function
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Cody');
  return element;
}

document.body.appendChild(component());