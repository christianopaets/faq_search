import {FAQController} from "./faq.controller.js";

export class SearchController {

    _searchText = '';
    _words = [];
    _faq = new FAQController();

    get searchText() {
        return this.searchText;
    }

    get words() {
        return this._words;
    }

    constructor(searchText) {
        this._searchText = searchText;
        this._init(searchText);
    }

    _init(text) {
        const words = text.split(' ');
        this._words = words.filter(word => word.length > 2);
    }

    _searchFromFAQ(faq) {
      return faq.keywords.map(keyword => this._searchFromKeyword(keyword));
    }

    _searchFromKeyword(keyword) {
      return {
        start: this._words.filter(word => word.includes(keyword) && word.indexOf(keyword) === 0).length,
        middle: this._words.filter(word => word.includes(keyword) && word.indexOf(keyword) > 0).length
      };
    }

    performSearch() {
      return this._faq.getFAQ()
        .map(faq => this._searchFromFAQ(faq));
    }

}
