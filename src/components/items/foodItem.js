import Element from '../commons/element';

const foodItem = ({ imagePath, price: prc, name }) => {
  const Item = new Element().create('div').class('col-lg-3 my-2');
  const foodItem = new Element().create('div').class('d-flex flex-column foodItem p-2');
  const image = new Element().create('img').class('image');
  image.element().setAttribute('src', imagePath);
  image.appendTo(foodItem.element());
  const title = new Element().create('h4').class('text-center');
  new Element().createText(name).appendTo(title.element());
  const price = new Element().create('span').class('text-center');
  new Element().createText(prc).appendTo(price.element());
  title.appendTo(foodItem.element());
  price.appendTo(foodItem.element());
  foodItem.appendTo(Item.element());
  return Item;
};


export default foodItem;