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
        //  console.log(item.id);
        return `
    <li id="${item.id}" class="search__item">    
      <div id="${item.id}" class="search__card">
        <div id="${item.id}" class="search__img" >
          <img id="${item.id}" src="${item.images[1].url}" alt="${item.name}">
        </div>
        <div id="${item.id}" class="card-text__transform">
          <span id="${item.id}" class="card-text__name">${item.name}</span>
        </div>
        <span id="${item.id}" class="card-text__data">${item.dates.start.localDate}</span>        
        <div id="${item.id}"class="card-text__transform2">
          <span id="${item.id}" class="card-text__place">
            <svg id="${item.id}" class="place-icon">
              <use href="./images/symbol-defs.svg#icon-vector"></use>
            </svg>&#10207; ${item._embedded.venues[0].name}
          </span>
        </div>
      </div>
        <div id="${item.id}" class="search__rectangle"></div>
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
