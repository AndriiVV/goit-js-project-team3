import fetchUrl from './fetchImages';

const pageContainer = document.querySelector('.main__pagination');

function renderPage(totalPage, url) {
  // console.log('renderPage is running... totalPage is: ', totalPage);
  pageContainer.innerHTML = '';
  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++) {
      const firstPageActive = i === 1 ? 'class="js__pagination_active"' : '';

      pageContainer.innerHTML += `
    <li class="main__pagination_item ">
    <a ${firstPageActive} data-href="${url}">${i}</a>
    </li>`;
    }
    // } else if (totalPage > 47) {
    //   pageContainer.innerHTML = `
    //   <li class="main__pagination_item ">
    //   <a class="js__pagination_active" data-href="${url}">1</a>
    //   </li>
    //   <li class="main__pagination_item ">
    //   <a data-href="${url}">2</a>
    //   </li>
    //   <li class="main__pagination_item ">
    //   <a data-href="${url}">3</a>
    //   </li>
    //   <li class="main__pagination_item ">
    //   <a data-href="${url}">4</a>
    //   </li>
    //   <li class="main__pagination_item ">
    //   <a data-href="${url}">5</a>
    //   </li>
    //   <li class="main__pagination_item main__pagination_dats">
    //   ...
    //   </li>
    //   <li class="main__pagination_item ">
    //   <a data-href="${url}">47</a>
    //   </li>`;
  } else {
    pageContainer.innerHTML = `
    <li class="main__pagination_item ">
    <a class="js__pagination_active" data-href="${url}">1</a>
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">2</a>
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">3</a>
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">4</a>
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">5</a>
    </li>
    <li class="main__pagination_item main__pagination_dats">
    ... 
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">${totalPage}</a>
    </li>`;
  }
}

export default renderPage;
