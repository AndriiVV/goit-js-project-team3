import renderCard from './render-card';
import renderPage from './render-page';
import Notiflix from 'notiflix';

async function startPage(idCountry, countryName) {
  // console.log('startPage is running...');
  try {
    // if (window.screen.width >= 768 && window.screen.width < 1280) {
    //   const res = await fetch(
    //     `https://app.ticketmaster.com/discovery/v2/events.json?size=21&countryCode=${idCountry}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`,
    //   );
    //   const finalEl = await res.json();
    //   renderCardForTablet(finalEl, countryName);
    // } else {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${idCountry}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`,
    );
    const finalEl = await res.json();
    renderCardForTablet(finalEl, countryName);
    // }
  } catch (error) {
    error.message;
  }
}

function renderCardForTablet(info, name) {
  // console.log('renderCardForTablet is running... Next is renderCard');
  renderCard(info._embedded.events);

  // console.log(
  //   'renderCardForTablet is running... Next is renderPage. Parameters are: ',
  //   Math.min(50, info.page.totalPages),
  //   info._links.self.href,
  // );

  renderPage(Math.min(50, info.page.totalPages), info._links.self.href);
  setTimeout(() => {
    Notiflix.Notify.success(`HELLO 👋, You see EVENTS only ${name}`);
  }, 1800);
  setTimeout(() => {
    Notiflix.Notify.info('👈 BUT, You Can write or Say KEYWORD, and see events only you want');
  }, 5000);
}

export default startPage;
