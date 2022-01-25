import renderCard from "./render-card"
import renderPage from "./render-page";
import Notiflix from 'notiflix';

async function startPage(idCountry, countryName) {
  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${idCountry}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`
    )
    const info = await res.json()
    renderCard(info._embedded.events);
    renderPage(info.page.totalPages, info._links.self.href,)
    setTimeout(() => { Notiflix.Notify.success(`HELLO, You see EVENTS only ${countryName}`)},300)
     setTimeout(() => { Notiflix.Notify.info('BUT, You Can write KEYWORD, and see events only you want')},4000)
    console.log(info);
    
  } catch (error) {
    error.message
  }
}

export default startPage