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

const list = document.querySelector('.gallery');
console.log(list);

const markup = images.map((image) => `<li class="list-item"><img class='list-img' scr='${image.url}' alt='${image.alt}' width= 360 height=240 />
  </li>`).join("");
console.log(markup);

const img = document.createElement('img');
console.log(img);

// img.setAttribute("scr",'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// img.setAttribute("scr",'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// img.setAttribute('https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// img.setAttribute("alt", 'White and Black Long Fur Cat');



console.log(img.attributes); 

console.log(img.hasAttribute("src")); 


list.insertAdjacentHTML("beforeend", markup);
console.log(list);





// const refs = {
//   ul: document.querySelector(".gallery")
// };

// const makeGalleryMarkup = ({ url, alt }) =>
//   `<li class ='list gallery__list'><img scr="${url}" alt ="${alt}</li>`;
// console.log(makeGalleryMarkup);

// const makeGallery = images.map(makeGalleryMarkup).join("");
// console.log(makeGallery);

// refs.ul.insertAdjacentHTML('beforeend', makeGallery);
// console.log(refs);