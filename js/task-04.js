// let btnDecrement = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecrement);
// let btnIncrement = document.querySelector('button[data-action="increment"]');
// console.log(btnIncrement);

// let count = document.getElementById("value");
// console.log(count);

// const calculateByClicBtn = () =>
// btnIncrement = count.innerHTML;
//     if (btnIncrement<= 2) {
//         count.innerHTML += 1;
//  btnIncrement = count.innerHTML;       
// };
// console.log(calculateByClicBtn);
// const handelClickTargetButtonIncrement = btnIncrement.addEventListene('click', calculateByClicBtn)


let counterValue = document.getElementById("value");

// btnIncrement = count.innerHTML;
let btnIncrement = document.querySelector('button[data-action="increment"]');

function hendleBtnClick(event) {
  event.preventDefault();

  let counteClickBtn = counterValue.textContent;
  counterValue.textContent = parseInt(counteClickBtn) + 1;
}

btnIncrement.addEventListener('click', hendleBtnClick);



let btnDecrement = document.querySelector('button[data-action="decrement"]');

function hendleBtnClick1(event) {
  event.preventDefault();

  let counteClickBtn = counterValue.textContent;
counterValue.textContent = parseInt(counteClickBtn) -1;
}

btnDecrement.addEventListener('click', hendleBtnClick1);