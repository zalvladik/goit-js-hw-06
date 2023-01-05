const buttonColor = document.querySelector('.change-color')
const bg = document.querySelector('body')
const carrentColor = document.querySelector('.color')

function getRandomHexColor() {
  const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  carrentColor.textContent = random;
  bg.style.backgroundColor = carrentColor.textContent;
  console.log(carrentColor.textContent)
}

buttonColor.addEventListener('click', getRandomHexColor)








