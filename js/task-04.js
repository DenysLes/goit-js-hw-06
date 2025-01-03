let btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
let btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

let count = document.getElementById("value");
console.log(count);

const calculateByClicBtn = () =>
btnIncrement = count.innerHTML;
    if (btnIncrement<= 2) {
        count.innerHTML += 1;
 btnIncrement = count.innerHTML;       
};
console.log(calculateByClicBtn);
const handelClickTargetButtonIncrement = btnIncrement.addEventListene('click', calculateByClicBtn)
