import fetchUrl from "./fetchImages"

const PageContainer= document.querySelector(".main__pagination")
let res = 0;

function renderPage(totalPage) {
  console.log(totalPage);

  for (let i = 1; i <= totalPage; i++){
    
    PageContainer.innerHTML += `
    <li class="main__pagination_item js__pagination_active">
    <span>${i}</span>
    </li>
    `
    // res += 1
    
    console.log(i);
  }
}

export default renderPage;