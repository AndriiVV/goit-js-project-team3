import renderCard from './render-card';
import renderPage from './render-page';

import Notiflix from 'notiflix';



async function fetchByCountry(idCountry) {
  try {

    const keyWord = document.querySelector(".search-input").value
   
    const responce = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyWord}&&countryCode=${idCountry}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`);

    const infoCountry = await responce.json();
    renderCard(infoCountry._embedded.events);
    renderPage(Math.min(50, infoCountry.page.totalPages), infoCountry._links.self.href);
    setTimeout(() => {
      Notiflix.Notify.success(' 👏 More EVENTS for this COUNTRY!');
    }, 300);
  } catch (error) {
    setTimeout(() => {
      Notiflix.Notify.failure('Sorry, NOT Today, In This Country....  🥺');
    }, 300);
    error.message;
  }
}
export default fetchByCountry;
