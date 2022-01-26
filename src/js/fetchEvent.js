import renderModal from "./render-modal"
const axios = require('axios');

function fetchEvent(id) {
 
  return axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`)
    .then(res => {
      if (res.data.info === undefined) {
        renderModal(res.data,`Coming soon   ╮(￣_￣)╭ `)
        
      }
      else {
     
        renderModal(res.data,res.data.info)
      }
      
      // console.log(res.data);
      // console.log(res.data.info)
      // console.log(res.data.dates.start.localDate)
      // console.log(res.data.dates.start.localTime)
      // console.log(res.data._embedded.venues[0].name)
      // console.log(res.data.dates.timezone)
      // console.log(res.data.name)
      // console.log(res.data.priceRanges[0].min)
      // console.log(res.data.priceRanges[0].max)
      // console.log(res.data.priceRanges[0].currency)
      // console.log(res.data.products[0].url)
      // console.log(res.data.images[1].url)
    })
    .catch(error => error)
  
}
export default fetchEvent