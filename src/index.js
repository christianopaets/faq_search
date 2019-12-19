import { FAQController } from './controllers/faq.controller.js';
import { SearchController } from './controllers/search.controller.js';

const searchButton = $('#search-button');
const input = $('#search-input');

const faq = new FAQController();

searchButton.on('click', () => {
    const searchController = new SearchController(input.val());
    console.log(searchController.performSearch());
});
