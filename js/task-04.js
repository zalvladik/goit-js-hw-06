const buttons = counter.querySelectorAll('button');
const buttonMinus = buttons[0];
const buttonPlus = buttons[1];
const currentValue = counter.querySelector('#value');
let num = 0;
buttonPlus.addEventListener('click', () => { currentValue.textContent = num = num + 1});
buttonMinus.addEventListener('click', () => { currentValue.textContent = num = num - 1});