import fetchUrl from "./fetchImages"

const pageContainer = document.querySelector(".main__pagination")

function renderPage(totalPage,url) {

  pageContainer.innerHTML=""
  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++){
      
    pageContainer.innerHTML += `
    <li class="main__pagination_item ">
    <a  data-href="${url}">${i}</a>
    </li>`
  }
    
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
    <li class="main__pagination_item ">
    <span> ... </span>
    </li>
    <li class="main__pagination_item ">
    <a data-href="${url}">${totalPage}</a>
    </li>`
    
  }
  
}

export default renderPage;
