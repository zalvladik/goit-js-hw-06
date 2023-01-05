const nameValue = document.querySelector('#name-input');
const anonymous = document.querySelector('#name-output')
nameValue.addEventListener('input', onInputChange)

function onInputChange(event){
    anonymous.textContent = event.currentTarget.value
}