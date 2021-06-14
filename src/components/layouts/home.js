import Element from '../commons/element';

const container = new Element().create('div').class('tab-pane active container p-3').id('home');
const home = new Element().create('div').class('d-flex home_content justify-content-center align-items-center');
const h2 = new Element().create('h2').class('text-center welcome-text');
new Element().createText('Welcome to ESCONNECT | Restaurant').appendTo(h2.element());

h2.appendTo(home.element());
home.appendTo(container.element());

export default container;