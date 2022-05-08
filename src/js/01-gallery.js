// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const cardMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup); 

function createGallery(galleryItems) {
          return galleryItems.map(({ preview, original, description }) => {
          return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt="" title="${description}"
    />
  </a>
</div>`;
        
 }).join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  
  captionDelay: 250,
});


  

