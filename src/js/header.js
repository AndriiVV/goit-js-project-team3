import countries from "../json/countries.json";
const axios = require('axios');

const refs = {
  form: document.querySelector("#search-form"),
  inputSearch: document.querySelector("[name=searchQuery]"),
  inputCountry: document.querySelector("[name=searchCountryQuery]"),
  cardEL:document.querySelector(".search__list")
}
console.log(refs.cardEL);
let code = "";
let searchId = "";

function renderSearchCountry(countries) {
  const markup = countries.map(item => {
    code = item.alpha;
    return  `<li 
    class="country-item"> <span class="text-item"> ${item.name} / (${item.alpha})</span> </li>
    `}).join("")
  
}
renderSearchCountry(countries)

refs.form.addEventListener("submit", onSubmitForm)

function onSubmitForm(event) {
  event.preventDefault()
  searchId = event.target.searchQuery.value;
  code = event.target.searchCountryQuery.value
  fetchUrl(searchId,code)
  event.target.reset()
  
}

async function fetchUrl(kewyord,code) {
   try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${kewyord}&countryCode=${code}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`);
     const data = await response.json();
     renderCard(data._embedded.events)
    console.log(data._embedded);
  } catch (error) {
    error.message;
  }
};

function renderCard(info) {
  const cardMarkup = info.map(item => {
    // console.log(item);
    // console.log(item.name);
    // console.log(item.dates.start.localDate);
    // console.log(item._embedded.venues[0].name);
    // console.log(item.images[1].url);
   return `
    <div class="card-wrap">
      <img width="180" height="227" src="${item.images[1].url}" alt="${item.name}">
      <ul class="search__item">
        <li class="card-item"><span class="card-text-name">${item.name}</span> </li>
        <li class="card-item"><span class="card-text-data">${item.dates.start.localDate}</span></li>
        <li class="card-item">
          <svg class="place-icon" width="50" height="50">
            <use href=""></use>
          </svg>
          <span class="card-text-place">${item._embedded.venues[0].name}</span>
        </li>
      </ul>
    </div>`
  }).join("")

  refs.cardEL.innerHTML = cardMarkup
}

fetch(`https://app.ticketmaster.com/discovery/v2/events/G5v0Zpsu6Edy5/images.json?apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`).then(res => res.json()).then(data => console.log(data))