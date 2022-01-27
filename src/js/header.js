import countries from '../json/countries.json';
import startPage from './firstFetch';

import fetchUrl from './fetchImages';
import { Select } from '../js/select';

import 'animate.css';
import NiceSelect from '../../node_modules/nice-select2/dist/js/nice-select2';

const nodeCountries = document.querySelector('[name=searchCountryQueryNew]');
const selectedCountry = 'US';

const alpha = countries
  .map(country => {
    let selected = '';
    if (country.alpha === selectedCountry) {
      selected = 'selected';
    }
    return `
    <option value="${country.alpha}" ${selected}>${country.name}</option>>
  `;
  })
  .join('');

nodeCountries.innerHTML = alpha;

new NiceSelect(document.getElementById('a-select'), { searchable: true });

const refs = {
  form: document.querySelector('#search-form'),
  inputSearch: document.querySelector('[name=q]'),
  inputCountry: document.querySelector('div.nice-select.form-field-country li.selected'),

  cardEL: document.querySelector('.search__list'),
};

// console.log(
//   'Before startPage running (from hader.js)... Parameters are: ',
//   refs.inputCountry.dataset.value,
//   refs.inputCountry.textContent,
// );

startPage(refs.inputCountry.dataset.value, refs.inputCountry.textContent);

let code = '';
let searchId = '';
let page = 1;

// function renderSearchCountry(countries) {
//     const markup = countries
//         .map(item => {
//             code = item.alpha;
//             return `<li
//     class="country-item"> <span class="text-item"> ${item.name} / (${item.alpha})</span> </li>
//     `;
//         })
//         .join('');
// }
// renderSearchCountry(countries);

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  searchId = event.target.q.value;

  // console.log('onSubmitForm is running... searchId is: ', searchId);

  code = document.querySelector('div.nice-select.form-field-country li.selected').dataset.value;

  // console.log('Before fetchUrl running (from onSubmitForm)... Parameters are: ', searchId, code);

  fetchUrl(searchId, code);
 
  
  // event.target.reset();
}

export default onSubmitForm;
