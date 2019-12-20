import { FAQController } from './controllers/faq.controller.js';
import { SearchController } from './controllers/search.controller.js';

const searchButton = $('#search-button');
const input = $('#search-input');

const faq = new FAQController();

searchButton.on('click', () => {
    const searchController = new SearchController(input.val());
    createAccordion();
    createCards(searchController.performSearch());
});

function createAccordion() {
  const result = $('#result');
  result.innerHTML = '';
  result.append(`<div class="accordion" id="accordionExample"></div>`);
}

function createCards(questions) {
  const accordion = $('#accordionExample');
  const cards = questions.map((question, index) => createCard(question, index)).join('\n');
  accordion.innerHTML = '';
  accordion.append(cards);
}

function createCard(question, index) {
  return `<div class="card">
    <div class="card-header" id="heading${index}">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
          ${question.question}
        </button>
      </h2>
    </div>

    <div id="collapse${index}" class="collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-parent="#accordionExample">
      <div class="card-body">
        ${question.answer}
      </div>
    </div>
  </div>`
}
