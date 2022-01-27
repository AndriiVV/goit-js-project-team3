import renderCard from './render-card';
import renderPage from './render-page';
import Notiflix from 'notiflix';

let code = '';
let searchId = '';
let page = 1;

const cardEl = document.querySelector('.search__list');
const mainPagin = document.querySelector('.main__pagination');
const searchEl = document.querySelector('.search-input');

async function fetchUrl(keyword, code) {
  // console.log('fetchUrl is running (before try)...');
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=${code}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`,
    );
    const data = await response.json();
    renderCard(data._embedded.events);

    // console.log(
    //   'Pages for renderPage: ',
    //   Math.min(50, +data.page.totalPages),
    //   ' of ',
    //   data.page.totalPages,
    // );
    // console.log('fetchUrl is running (in try)... Next is renderPage');

    renderPage(Math.min(50, +data.page.totalPages), data._links.self.href);
    // console.log(data);
    if (data.page.totalElements !== 0) {
     
      searchEl.value = ""
      setTimeout(() => {
        Notiflix.Notify.success('Awesome! 🤟 GO-GO-GO');
      }, 500);
    } else if (data.page.totalElements === 0) {
      // cardEl.innerHTML = ``;
      // mainPagin.innerHTML = ``;
      setTimeout(() => {
        Notiflix.Notify.failure('Sorry, NOT Today ....  🥺');
      }, 500);
    }
  } catch (error) {
    // cardEl.innerHTML = ``;
    // mainPagin.innerHTML = ``;
    Notiflix.Notify.failure('Sorry, NOT Today .... 🥺');
    error.message;
  }
}

export default fetchUrl;
