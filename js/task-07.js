const rangeValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeValue.addEventListener('input', () => {
    text.style.fontSize = rangeValue.value + 'px';
    console.log(rangeValue.value)
})