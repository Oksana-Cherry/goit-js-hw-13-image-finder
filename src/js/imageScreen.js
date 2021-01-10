import refs from './refs';
import * as basicLightbox from 'basiclightbox'

function imageScreen(e) {
    e.preventDefault(); 
    if (e.target.nodeName  !== 'IMG') {
        return;
    }
    basicLightbox
        .create(`<img class="modalImg" src="https://placehold.it/1200x900">`)
        .show();
    const modalImg = document.querySelector('.modalImg');
    modalImg.src = e.target.dataset.image;

}
refs.galleryList.addEventListener('click', e => {
  imageScreen(e);
});


//const instance = basicLightbox.create(`<img class="modalImg" src="https://placehold.it/1200x900">`)
 //instance.show()