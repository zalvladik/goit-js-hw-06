const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl= document.querySelector('#ingredients')
console.log(ulEl)
function answer() {
  for(let i = 0; i <= ingredients.length - 1; i += 1){
  const inglist = document.createElement('li');
  inglist.classList.add('.item')
  inglist.textContent = ingredients[i];
  ulEl.append(inglist)
  }
}
console.log(answer());