const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')

inputEl.addEventListener('input', e => {
    textEl.style.fontSize = `${e.target.value }px`
})