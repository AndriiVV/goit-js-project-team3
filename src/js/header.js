import countries from '../json/countries.json';
import Notiflix from 'notiflix';
const axios = require('axios');
import fetchUrl from './fetchImages';

const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('[name=searchQuery]'),
  inputCountry: document.querySelector('[name=searchCountryQuery]'),
  cardEL: document.querySelector('.search__list'),
};

let code = '';
let searchId = '';
let page = 1;

function renderSearchCountry(countries) {
  const markup = countries
    .map(item => {
      code = item.alpha;
      return `<li 
    class="country-item"> <span class="text-item"> ${item.name} / (${item.alpha})</span> </li>
    `;
    })
    .join('');
}
renderSearchCountry(countries);

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  searchId = event.target.searchQuery.value;
  code = event.target.searchCountryQuery.value;
  if (searchId.length === 0 || code === 0) {
    refs.cardEL.innerHTML = ""
    return Notiflix.Notify.failure('Please write something ....')
  }
  Notiflix.Notify.success('Awesome! GO-GO-GO')
  fetchUrl(searchId, code);
  
  event.target.reset();
}


export default onSubmitForm;
