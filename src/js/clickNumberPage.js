import renderPage from './render-page';
import renderCard from './render-card';
import fetchNumberClick from './fetchNumberPage';

let numberPage = 0;

const mainUl = document.querySelector('.main__pagination');
mainUl.addEventListener('click', onClickPage);

function onClickPage(event) {
  event.preventDefault();
  console.log(event.target.tagName);
  if (event.target.tagName !== 'A') {
    return false;
  } else {
    const finalHref = event.target.dataset.href;
    numberPage = `&page=${+event.target.textContent - 1}&apikey=841T1YMOPnVKBAAycVhND0Lj4GpnyoMw`;

    fetchNumberClick(finalHref, numberPage, event.target);
  }
}
export default onClickPage;
