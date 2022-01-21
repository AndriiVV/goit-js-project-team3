import fetchUrl from './fetchImages';

const cardEL = document.querySelector('.search__list')


function renderCard(info) {
  if (info.length === 0) {
    cardEL.innerHTML = "";
    return false
  }
  else {
    const cardMarkup = info
      .map(item => {
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
    </div>`;
      })
      .join('');

    cardEL.innerHTML = cardMarkup;
  }
} 




export default renderCard;
