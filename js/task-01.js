const categoriesWithItems = document.querySelectorAll('li.item')
categoriesWithItems.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});

