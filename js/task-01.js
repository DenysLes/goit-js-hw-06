const itemsEl = document.querySelectorAll('.item');
console.log(itemsEl);

itemsEl.forEach(function (elem) {
    console.log(`Titles : ${elem.length}`, `Titles : 3`, `Animals,Products,Technology`);
});

const titleEl = document.querySelector('h2');
console.log(titleEl);
console.log(titleEl.textContent);


const subList = document.querySelectorAll('ul');
console.log(subList);

const categories = document.querySelector('#categories');
console.log(categories);

subList.forEach(function (elem) {
    console.log(elem);
});

const categoriesChildren = categories.childNodes;
console.log(categoriesChildren);


const itemELChildren = categories.childNodes;
console.log(itemELChildren);

const firstItemChildEl = categories.firstElementChild;
console.log(firstItemChildEl);

const lastItemChildEl = categories.lastElementChild;
console.log(lastItemChildEl);

const itemEl = document.querySelector('.item');
console.log(itemEl);

const titleAnimalsEl = itemEl.firstElementChild;
console.log(titleAnimalsEl);

const listAnimalsEl = titleAnimalsEl.nextElementSibling;
console.log(listAnimalsEl);

const itemAnimalListEL = listAnimalsEl.children;
console.log(itemAnimalListEL);

const animalsLiEl = document.querySelectorAll('li')

animalsLiEl.forEach(function (elem) {
        console.log(elem);
    })