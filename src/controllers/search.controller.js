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
    return {
      includes: faq.keywords.map(keyword => this._searchFromKeyword(keyword)),
      faq: faq
    };
  }

  _searchFromKeyword(keyword) {
    return {
      start: this._words
        .filter(word => this._checkWordIncludes(word, keyword) && this._checkWordIndexOf(word, keyword) === 0).length,
      middle: this._words
        .filter(word => this._checkWordIncludes(word, keyword) && this._checkWordIndexOf(word, keyword)).length
    };
  }

  _checkWordIncludes(word, search) {
    return word.toLowerCase().includes(search.toLowerCase());
  }

  _checkWordIndexOf(word, search) {
    return word.toLowerCase().indexOf(search.toLowerCase());
  }

  _filterNullableResults(result) {
    return result.filter(item => item.start > 0 || item.middle > 0).length > 0;
  }

  _sortResults(a, b, aIncludes, bIncludes) {
    const length = aIncludes.length > bIncludes.length ? bIncludes.length : aIncludes.length;
    for (let i = 0; i < length; ++i) {
      if (aIncludes[i].start < bIncludes[i].start || aIncludes[i].middle < bIncludes[i].middle) {
        return b;
      }
    }
    return a;
  }

  performSearch() {
    return this._faq.getFAQ()
      .map(faq => this._searchFromFAQ(faq))
      .filter(result => this._filterNullableResults(result.includes))
      .sort(((a, b) => this._sortResults(a, b, a.includes, b.includes)))
      .map(result => result.faq);
  }

}
