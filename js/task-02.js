const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelectorAll('ul');
console.log(ingredientsListEl);



const firstItem = document.createElement('li');
firstItem.classList.add('item')
firstItem.textContent = "Potatoes";

const secondItem = document.createElement('li');
secondItem.classList.add('item');
secondItem.textContent = 'Mushrooms';

const thirdItem = document.createElement('li');
thirdItem.classList.add('item');
thirdItem.textContent = 'Garlic';

const fourthItem = document.createElement('li');
fourthItem.classList.add('item');
fourthItem.textContent = 'Tomatos';

const fifthItem = document.createElement('li');
fifthItem.classList.add('item');
fifthItem.textContent = 'Herbs';

const lastItem = document.createElement('li');
lastItem.textContent = "Condiments";
lastItem.classList.add('item')

const list = document.querySelector('#ingredients');
console.log(list);

list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, lastItem);
console.log(list);