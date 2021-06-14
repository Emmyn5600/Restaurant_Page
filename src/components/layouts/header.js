import Element from '../commons/element';
import { navigateToHome, navigateToMenu, navigateToContact } from '../../actions/index';

const nav = new Element().create('nav').class('navbar');
const container = new Element().create('div').class('container d-flex justify-content-between');
const title = new Element().create('div').class('title');
new Element().createText('ESCONNECT | Restaurant').appendTo(title.element());

title.appendTo(container.element());
const btns = new Element().create('div').class('d-flex btns');
const btn1 = new Element().create('button').appendTo(btns.element());
btn1.element().setAttribute('data-target', '#home');
btn1.element().setAttribute('data-toggle', 'tab');
new Element().createText('Home').appendTo(btn1.element());
btn1.element().addEventListener('click', navigateToHome);
const btn2 = new Element().create('button').appendTo(btns.element());
btn2.element().setAttribute('data-target', '#menu');
btn2.element().setAttribute('data-toggle', 'tab');
new Element().createText('Menu').appendTo(btn2.element());
btn2.element().addEventListener('click', navigateToMenu);
const btn3 = new Element().create('button').appendTo(btns.element());
btn3.element().setAttribute('data-target', '#contact');
btn3.element().setAttribute('data-toggle', 'tab');
new Element().createText('Contact Us').appendTo(btn3.element());
btn3.element().addEventListener('click', navigateToContact);
btns.appendTo(container.element());
container.appendTo(nav.element());

export default nav;