import * as DataImporter from './js/data-importer.js';

const emptyCardElement = document.querySelector('#cardProductListEmpty');
const cardListElement = document.querySelector('#cardProductList');

emptyCardElement.style.display = 'none';

const data = DataImporter.fetchURL('./data/products.json');
console.log( data );
