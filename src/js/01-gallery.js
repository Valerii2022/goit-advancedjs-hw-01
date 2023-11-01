// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description}/>
   </a>
</li>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryList);

new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
