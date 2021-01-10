/*const url = 'https://pixabay.com/api/';
const key = '19764594-1ff33c8737753e7bf91ee1679';
console.log(url);*/
 
import refs from '../js/refs';
import markupImages from '../templates/templates.hbs';

export default {
    searchQuery: '',
    page: 1,
    fetchApiSearch() {  
    const key = '19764594-1ff33c8737753e7bf91ee1679';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;
        
    return fetch(url)
        .then(response => response.json())  
        .then(({ hits }) => {
            const markup = markupImages(hits);            
            refs.galleryList.insertAdjacentHTML('beforeend', markup);
            this.page += 1;
            return hits;
        })
        .catch(error => console.log(error));    
    },
    resertPage() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
}