const modalEl = document.querySelector('.event-card');


function renderModal(item,info) {

  const maxStandart = Math.floor(item.priceRanges[0].max / 2);
  const minVip = Math.ceil(item.priceRanges[0].max / 2);

  const modalInfo = `
    <div class="event-card__img-box">
      <img
        src="${item.images[1].url}"
        alt="${item.name}"
        class="event-card__img-big"
      />
    </div>
    <div class="event-card__position">
      <div class="event-card__img-box-big">
        <img
          src="${item.images[1].url}"
          alt="${item.name}"
          class="event-card__big-img"
        />
      </div>
      <div class="event-card__event">
        <h3 class="event-card__info">INFO</h3>
        <div id="element">
        <p class="event-card__text ">
          ${info}
        </p>
        </div>
        <h3 class="event-card__where">WHEN</h3>
        <p class="event-card__text">${item.dates.start.localDate}</p>
        <p class="event-card__text">${item.dates.start.localTime} (${item.dates.timezone})</p>
        <h3 class="event-card__where">WHERE</h3>
        <p class="event-card__text">${item.dates.timezone}</p>
        <p class="event-card__text">${item._embedded.venues[0].name}</p>
      
       <h3 class="event-card__info">WHO</h3>
      <p class="event-card__text"> ${item.name}</p>
        <h3 class="event-card__info">PRICES</h3>
        <div class="event-card__bar-code">
          <p class="event-card__bar-code__text">||| || || |||</p>
          <p class="event-card__text">Standart ${item.priceRanges[0].min}-${maxStandart} ${item.priceRanges[0].currency}</p>
        </div>
        <a href="${item.url}" target="_blank" class="event-card__btn-buy">BUY TICKETS</a>
          <div class="event-card__bar-code">
      <p class="event-card__bar-code__text">||| || || |||</p>
      <p class="event-card__text">VIP ${minVip}-${item.priceRanges[0].max} ${item.priceRanges[0].currency}</p>
       
      </div class="wrap-author">
       <a href="${item.url}" target="_blank" class="event-card__btn-buy">BUY TICKETS</a>
       </div>
       </div>
      <button class="event-card__btn-more">MORE FROM THIS AUTHOR <span class="hidden-name">${item.name}</span></button>
      
      </div>
      
    `;

  modalEl.innerHTML = modalInfo;
}

export default renderModal;
