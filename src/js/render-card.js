import fetchUrl from './fetchImages';

const cardEL = document.querySelector('.search__list');

function renderCard(info) {
  if (info.length === 0) {
    cardEL.innerHTML = '';
    return false;
  } else {
    const cardMarkup = info
      .map(item => {
        // console.log(item);
        // console.log(item.name);
        // console.log(item.dates.start.localDate);
        // console.log(item._embedded.venues[0].name);
        // console.log(item.images[1].url);
        return `
    <li class="search__item">
    <div class="search__rectangle"></div>
      <div class="search-card"><div class="search__img">
      <img src="${item.images[1].url}" alt="${item.name}">
      </div>
        <span class="card-text-name">${item.name}</span> 
        <span class="card-text-data">${item.dates.start.localDate}</span>
        
          <span class="card-text-place"><svg class="place-icon" width="7" height="10">
            <use href=""></use>
          </svg>${item._embedded.venues[0].name}</span></div>
        </li>`;
      })
      .join('');

    cardEL.innerHTML = cardMarkup;
  }
}

export default renderCard;
