import './css/styles.css';
import refs from './js/refs';
import markupImages from './templates/templates.hbs';
import apiService from './js/apiService';
import './js/imageScreen'
import 'handlebars';
//import { error } from '@pnotify/core';
//import '@pnotify/core/dist/PNotify.css';
//import '@pnotify/core/dist/BrightTheme.css';
import 'basiclightbox/dist/basicLightbox.min.css';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();    

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;       
    refs.galleryList.innerHTML = '';
    
    apiService.resertPage();
    refs.loadMoreBtn.classList.add('is-hidden');

    apiService
        .fetchApiSearch()
        .then(hits => {
            markupImages(hits);
            refs.loadMoreBtn.classList.remove('is-hidden');
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth',
            });
    });
    
    form.reset();
})

refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchApiSearch().then(markupImages);
})