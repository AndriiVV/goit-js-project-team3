import renderPage from './render-page';
import renderCard from './render-card';
import fetchNumberClick from './fetchNumberPage';
import Notiflix from 'notiflix';

let numberPage = 0;

const mainUl = document.querySelector('.main__pagination');
mainUl.addEventListener('click', onClickPage);

function onClickPage(event) {
  // console.log('onClickPage is running...');
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return false;
  } else {
    // Check if clicked page is not Active to prevent the same content refresh:

    const exActivePage = document.querySelector(
      '.main__pagination a.js__pagination_active',
    ).textContent;

    // console.log('exActivePage is: ', exActivePage);
    // console.log('newActivePage is: ', event.target.textContent);

    if (event.target.textContent == exActivePage) return false;

    const allPages = document.querySelectorAll('.main__pagination a');
    const maxPage = allPages[allPages.length - 1].textContent;

    // console.log('Before fetchNumberClick... maxPage is: ', maxPage);

    const finalHref = event.target.dataset.href;
    numberPage = `&page=${+event.target.textContent - 1}&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`;
    if (event.target.textContent < maxPage) {
      setTimeout(() => {
        Notiflix.Notify.success('We Have MORE EVENTS For YoU (^-^)');
      }, 500);
    }
    fetchNumberClick(finalHref, numberPage, event.target);
  }
}
export default onClickPage;
