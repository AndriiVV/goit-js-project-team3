// import fetchUrl from './fetchImages';
// import renderCardForTablet from './firstFetch';

// import vectorSvg from '../images/bg-logo-1x-mob.png';

const cardEL = document.querySelector('.search__list');

function renderCard(info) {
  // console.log(info);
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
        <div id="${item.id}" class="card-text__transform ">
          <span id="${item.id}" class="card-text__name animation__scss">${item.name}</span>
        </div>
        <span id="${item.id}" class="card-text__data">${item.dates.start.localDate}</span>        
        <div id="${item.id}"class="card-text__transform2 ">
          <span id="${item.id}" class="card-text__place animation__scss">
            &#10207; ${item._embedded.venues[0].name}
          </span>
        </div>
      </div>
        <div id="${item.id}" class="search__rectangle"></div>
    </li>`;
      })
      .join('');

    cardEL.innerHTML = cardMarkup;

    const spanText = document.querySelectorAll('.card-text__name');
    removeAnimationSpanText([...spanText]);

    const placeText = document.querySelectorAll('.card-text__place');
    removeAnimationPlaceText([...placeText]);
  }
}
function removeAnimationSpanText(nameItems) {
  const spanMap = nameItems.map(item => {
    if (item.textContent.length < 15) {
      return item.classList.remove('animation__scss');
    }
  });
}

function removeAnimationPlaceText(placeItems) {
  const placeMap = placeItems.map(item => {
    if (item.textContent.length < 75) {
      return item.classList.remove('animation__scss');
    }
  });
}

export default renderCard;
