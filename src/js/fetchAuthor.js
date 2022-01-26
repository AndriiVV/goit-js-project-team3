import renderCard from "./render-card"

async function fetchByAuthor(nameEvent) {

  try {
    const responce = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${nameEvent}&source=Ticketmaster&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`)
    const infoAuthor = await responce.json();
    console.log(infoAuthor);
    // renderCard(infoAuthor)
    
    
  } catch (error) {
    error.message
  }
  console.log(nameEvent);
}

export default fetchByAuthor;