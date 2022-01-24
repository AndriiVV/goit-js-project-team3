import fetchEvent from "./fetchEvent"

const formCard = document.querySelector(".search__list")


formCard.addEventListener("click", onClickCard)
function onClickCard(event) {
  event.preventDefault()
  if (event.target.tagName === "UL") {
    return false
  } else {
    fetchEvent(event.target.id)
  }
  
}