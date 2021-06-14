import Element from '../commons/element';
import foods from '../../data/index.json';
import foodItem from '../items/foodItem';

const container = new Element().create('div').class('tab-pane container p-3').id('menu');
const menu = new Element().create('div').class('row');
foods.forEach((item) => {
  foodItem(item).appendTo(menu.element());
});
menu.appendTo(container.element());

export default container;