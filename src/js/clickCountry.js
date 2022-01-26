import fetchByCountry from "./fetchCountry"

const countryName = document.querySelector(".search-form");

countryName.addEventListener("click", onClickCountryName)

function onClickCountryName(event) {
 event.preventDefault();
  
  if (event.target.dataset.value === undefined) {
    return false
  }
  else {
    fetchByCountry(event.target.dataset.value)
  }
}