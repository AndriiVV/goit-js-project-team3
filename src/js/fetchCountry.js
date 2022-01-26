import renderCard from './render-card';
import renderPage from './render-page';
import Notiflix from 'notiflix';

async function fetchByCountry(idCountry) {
  try {
    const responce = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=${idCountry}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`);
    const infoCountry = await responce.json();
    renderCard(infoCountry._embedded.events);
    renderPage(Math.min(47, infoCountry.page.totalPages), infoCountry._links.self.href);
    Notiflix.Notify.success(' 👏 More EVENTS for this COUNTRY!'  )
  } catch (error) {
    Notiflix.Notify.failure('Sorry, NOT Today, In This Country....  🥺' );
    error.message
  }

}
export default fetchByCountry