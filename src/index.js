import Element from './components/commons/element';
import header from './components/layouts/header';
import menu from './components/layouts/menu';
import home from './components/layouts/home';
import contact from './components/layouts/contact';

const content = document.getElementById('content');
const tabContent = new Element().create('div').class('tab-content');
header.appendTo(content);

home.appendTo(tabContent.element());
menu.appendTo(tabContent.element());
contact.appendTo(tabContent.element());

tabContent.appendTo(content);