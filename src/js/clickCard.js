import fetchEvent from './fetchEvent';
import Notiflix from 'notiflix';

const formCard = document.querySelector('.search__list');
const modal = document.querySelector('.backdrop');
// console.log(modal);
formCard.addEventListener('click', onClickCard);
function onClickCard(event) {
  event.preventDefault();
  if (event.target.tagName === 'UL') {
    return false;
  } else {
    modal.classList.remove('visually-hidden');
    setTimeout(() => {
      Notiflix.Notify.info(' 👈 Here You Can See More Information About This EVENT ');
    }, 300);
    fetchEvent(event.target.id);
  }
}
