import renderCard from './render-card';
const axios = require('axios');

const baseUrl = `https://app.ticketmaster.com`;
const pageUl = document.querySelector('.main__pagination');

async function fetchNumberClick(href, page, node) {
  // console.log('fetchNumberClick is running...');
  // axios.get(baseUrl + href + page).then(res => {
  //    console.log(res.data);
  //   if (res.data.page.totalPages > 1) {
  //     renderCard(res.data._embedded.events)
  //   }
  //   if (res.data.page.totalPage <= 7) {
  //   for (let i = 1; i <= totalPage; i++) {
  //     pageContainer.innerHTML += `
  //   <li class="main__pagination_item ">
  //   <a  data-href="${href}">${i}</a>
  //   </li>`
  //     }
  //   }
  //   else if(res.data.page.number <= 4) {

  //     pageUl.innerHTML =
  //     `<li class="main__pagination_item ">
  //         <a data-href="${href}">1</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a  data-href="${href}">2</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">3</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">4</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">5</a>
  //         </li>
  //         <li class="main__pagination_item " style="color:white">
  //         ...
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages}</a>
  //       </li>`
  //   }
  //   else if (res.data.page.number > res.data.page.totalPages - 4) {

  //      pageUl.innerHTML =
  //     `<li class="main__pagination_item ">
  //         <a data-href="${href}">1</a>
  //         </li>
  //         <li class="main__pagination_item " style="color:white">
  //         ...
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages - 4}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages - 3}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages - 2}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages - 1}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages}</a>
  //       </li>`

  //   }
  //   else {
  //     pageUl.innerHTML =
  //     `<li class="main__pagination_item ">
  //         <a data-href="${href}">1</a>
  //         </li>
  //         <li class="main__pagination_item " style="color:white">
  //         ...
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.number - 1}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.number}</a>
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.number + 1}</a>
  //         </li>
  //         <li class="main__pagination_item " style="color:white">
  //         ...
  //         </li>
  //         <li class="main__pagination_item ">
  //         <a data-href="${href}">${res.data.page.totalPages}</a>
  //       </li>`
  //   }

  //   }).catch(error => error)
  //=================
  try {
    const response = await fetch(baseUrl + href + page);
    const data = await response.json();

    const maxPages = Math.min(50, data.page.totalPages);

    // console.log('Fetch number click (on try): ', maxPages, ' of ', data.page.totalPages);

    if (data.page.totalPages > 1) {
      renderCard(data._embedded.events);
    }

    if (maxPages <= 7) {
      let newPages = '';
      // console.log('Max pages <= 7, update pagination');
      for (let i = 1; i <= maxPages; i++) {
        newPages += `
          <li class="main__pagination_item ">
          <a data-href="${href}">${i}</a>
          </li>`;
      }
      // console.log('New markup is ', newPages);
      // console.log('Key Node is: ', pageUl);
      pageUl.innerHTML = newPages;

      const newActive = document.querySelectorAll('.main__pagination a');
      // console.log(newActive);
      newActive.forEach(elem => {
        if (elem.textContent == node.textContent) {
          elem.classList.add('js__pagination_active');
          // console.log('New active node is ', elem);
        }
      });
    } else if (data.page.number < 4) {
      pageUl.innerHTML = `<li class="main__pagination_item ">
          <a data-href="${href}">1</a>
          </li>
          <li class="main__pagination_item ">
          <a  data-href="${href}">2</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">3</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">4</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">5</a>
          </li>
          <li class="main__pagination_item main__pagination_dats" >
          ...
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages}</a>
        </li>`;
    } else if (data.page.number >= maxPages - 4) {
      pageUl.innerHTML = `<li class="main__pagination_item ">
          <a data-href="${href}">1</a>
          </li>
          <li class="main__pagination_item main__pagination_dats" >
          ...
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages - 4}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages - 3}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages - 2}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages - 1}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages}</a>
        </li>`;
      // } else if (data.page.totalPages <= 50) {
      //   pageUl.innerHTML = `<li class="main__pagination_item ">
      //       <a data-href="${href}">1</a>
      //       </li>
      //       <li class="main__pagination_item main__pagination_dats">
      //       ...
      //       </li>
      //       <li class="main__pagination_item ">
      //       <a data-href="${href}">${data.page.number}</a>
      //       </li>
      //       <li class="main__pagination_item ">
      //       <a data-href="${href}">${data.page.number + 1}</a>
      //       </li>
      //       <li class="main__pagination_item ">
      //       <a data-href="${href}">${data.page.number + 2}</a>
      //       </li>
      //       <li class="main__pagination_item main__pagination_dats" >
      //       ...
      //       </li>
      //       <li class="main__pagination_item ">
      //       <a data-href="${href}">${data.page.totalPages}</a>
      //     </li>`;
    } else {
      pageUl.innerHTML = `<li class="main__pagination_item ">
          <a data-href="${href}">1</a>
          </li>
          <li class="main__pagination_item main__pagination_dats">
          ...
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${data.page.number}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${data.page.number + 1}</a>
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${data.page.number + 2}</a>
          </li>
          <li class="main__pagination_item main__pagination_dats" >
          ...
          </li>
          <li class="main__pagination_item ">
          <a data-href="${href}">${maxPages}</a>
        </li>`;
    }

    // console.log('Pagination was updated');
    const newActive = document.querySelectorAll('.main__pagination a');
    // console.log(newActive);
    newActive.forEach(elem => {
      if (elem.textContent == node.textContent) {
        elem.classList.add('js__pagination_active');
        // console.log('New active node is ', elem);
      }
    });
  } catch (error) {
    error.message;
  }
}
export default fetchNumberClick;
