const ulEl = document.querySelector('ul')
console.log('Number of categories: ' + ulEl.children.length);
for(let i=0; i <= ulEl.children.length-1; i += 1){
const itemEl = ulEl.children[i];
console.log('Category: '+itemEl.firstElementChild.textContent)
console.log('Elements: '+itemEl.querySelectorAll('li').length)
}