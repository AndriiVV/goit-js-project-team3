import countries from '../json/countries.json';
import Notiflix from 'notiflix';
const axios = require('axios');
import fetchUrl from './fetchImages';
import { Select } from '../js/select';

const select = new Select('#select', {
  placeholder: 'Choose country',
  selectedId: 'US',
  data: [
    { id: 'US', value: 'United States' },
    { id: 'UA', value: 'Ukraine' },
    { id: 'CA', value: 'Canada' },
    { id: 'CZ', value: 'Czech Republic' },
    { id: 'CR', value: 'Croatia' },
    { id: 'DM', value: 'Denmark' },
    { id: 'PL', value: 'Poland' },
    { id: 'PO', value: 'Portugal' },
  ],
  onSelect(item) {
    console.log('Selected Item', item.id);
  },
});

window.s = select;

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
  // code = event.target.searchCountryQuery.getAttribute('value');
  code = refs.inputCountry.getAttribute('value');
  if (searchId.length === 0 || code === 0) {
    refs.cardEL.innerHTML = '';
    return Notiflix.Notify.failure('Please write something ....');
  }
  Notiflix.Notify.success('Awesome! GO-GO-GO');
  fetchUrl(searchId, code);
  event.target.reset();
}

// export default onSubmitForm;
