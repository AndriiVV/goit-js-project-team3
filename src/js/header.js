import countries from '../json/countries.json';
import startPage from './firstFetch';

import fetchUrl from './fetchImages';
import { Select } from '../js/select';

const alpha = countries.map(country => {
  const container = {};
  container.id = country.alpha;
  container.value = country.name;
  
  return container;
});

const select = new Select('#select', {
  placeholder: 'Choose country',
  selectedId: 'US',
  countryName: 'United States of America',
  data: alpha,
  // onSelect(item) {
  //   console.log('Selected Item', item.id);
  // },
});
startPage(select.selectedId, select.options.countryName)

window.s = select;

const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('[name=q]'),
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
  searchId = event.target.q.value;

  code = refs.inputCountry.getAttribute('value');

  fetchUrl(searchId, code);

  event.target.reset();
}

export default onSubmitForm;
