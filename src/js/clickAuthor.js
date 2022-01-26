import fetchByAuthor from "./fetchAuthor"

const refs = {
  modalEl: document.querySelector(".event-card"),
  modalform: document.querySelector('.backdrop')
}



refs.modalEl.addEventListener("click", onClickAuthor)

function onClickAuthor(e){
  if (e.target.tagName !== "BUTTON") {
    return false
  } else {
   refs.modalform.classList.add("visually-hidden")
    const authorName = (e.target.textContent).slice(22, (e.target.textContent.length))
    fetchByAuthor(authorName)
  }
  
  
}

export default onClickAuthor;