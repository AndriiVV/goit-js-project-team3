import fetchEvent from './fetchEvent';

const formCard = document.querySelector('.search__list');
const modal = document.querySelector('.backdrop');
console.log(modal);
formCard.addEventListener('click', onClickCard);
function onClickCard(event) {
  event.preventDefault();
  if (event.target.tagName === 'UL') {
    return false;
  } else {
    modal.classList.remove('visually-hidden');

    fetchEvent(event.target.id);
  }
}
