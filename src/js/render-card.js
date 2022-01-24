import fetchUrl from './fetchImages';
// import vectorSvg from '../images/bg-logo-1x-mob.png';

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
          <div class="search__card">
            <div class="search__img">
              <img src="${item.images[1].url}" alt="${item.name}">
            </div>
            <div class="card-text__transform">
              <span class="card-text__name">${item.name}</span>
            </div>
            <span class="card-text__data">${item.dates.start.localDate}</span>        
            <div class="card-text__transform2">
              <span class="card-text__place">&#10207;  ${item._embedded.venues[0].name}</span>
            </div>
          </div>
          <div class="search__rectangle"></div>
        </li>`;
      })
      .join('');

    cardEL.innerHTML = cardMarkup;
  }
}

export default renderCard;

// <svg width="7" height="10" viewBox="0 0 7 10" class="place-icon">
//   <use href="${vectorSvg}"></use>
// </svg>;
