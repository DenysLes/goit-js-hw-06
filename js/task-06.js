const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputEl.dataset.length);
  const inputValueLength = Number(inputEl.value.length);

  if (inputValueLength === inputDataLength) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
  } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
};


// const textInput = document.querySelector('#validation-input')
// console.log(textInput.getAttribute('data-length'))

// textInput.addEventListener('blur', event => {
// 	if (event.target.value.length == textInput.getAttribute('data-length')) {
//         textInput.classList.add('valid')
// 		if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
// 	} else {
// 		if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
// 		textInput.classList.add('invalid')
// 	}
// })