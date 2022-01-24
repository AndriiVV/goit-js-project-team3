import renderCard from "./render-card"
import renderPage from "./render-page";
import Notiflix from 'notiflix';

let code = '';
let searchId = '';
let page = 1;



async function fetchUrl(keyword, code) {
  try {
    
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=${code}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`
    );
    const data = await response.json();
    renderCard(data._embedded.events);
    renderPage(data.page.totalPages, data._links.self.href,)

  } catch (error) {
    Notiflix.Notify.failure('Sorry, NOT Today ....')
    error.message;
  }
}

export default fetchUrl;