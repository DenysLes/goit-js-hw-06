// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const divControls = document.querySelector('#controls')

// const inputNumber = document.querySelector('[type="number"]');

// const btnCreate = document.querySelector('button[data-create]');
// const btnDestroy = document.querySelector('button[data-destroy]');
// const divBoxesEl = document.getElementById('boxes')


// const createBoxes = amount => {
// 	const elementsToAdd = []
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div')
// 		div.style.height = `${30 + 10 * i}px`
// 		div.style.width = `${30 + 10 * i}px`
// 		div.style.background = getRandomHexColor()
//     elementsToAdd.push(div)
//   }
// 	return elementsToAdd
// }
// const destroyBoxes = () => {
// 	divBoxesEl.innerHTML = ''
// }

// btnCreate.addEventListener('click', () => {
// 	let boxesToAdd = createBoxes(inputNumber.value)
// 	divBoxesEl.append(...boxesToAdd)
// })

// console.log(inputNumber.value)

// btnDestroy.addEventListener('click', () => {
// 	destroyBoxes.call()
// })
   








