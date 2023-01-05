const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


function creatorBox(){
  const ulEl = document.querySelector('.gallery');
  ulEl.style.display = 'block';
  for(let i = 0; i <= images.length -1; i +=1){
    const liEl = document.createElement('li');
    const imgEl = document.createElement('img');
    liEl.style.margin = '20px';
    imgEl.style.width ='400px';
    
    imgEl.src = images[i].url;
    imgEl.alt = images[i].alt ;
    liEl.appendChild(imgEl)
    console.log(liEl);
    ulEl.append(liEl)
  }
}

console.log(creatorBox())