import renderCard from "./render-card"
import renderPage from"./render-page"
async function fetchByAuthor(nameEvent) {

  try {
    const responce = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${nameEvent}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`)
    const infoAuthor = await responce.json();
    console.log(infoAuthor);
    renderCard(infoAuthor._embedded.events)
    renderPage(Math.min(47, infoAuthor.page.totalPages), infoAuthor._links.self.href)
    
    
  } catch (error) {
    error.message
  }
  
}

export default fetchByAuthor;