import fetchByCountry from "./fetchCountry"

const countryName = document.querySelector(".nice-select")


countryName.addEventListener("click", onClickCountryName)

function onClickCountryName(event) {
 event.preventDefault();
  
  if (event.target.dataset.value === undefined) {
    return false
  }
  else {
    console.log(event.target.dataset.value);
    fetchByCountry(event.target.dataset.value)
  }
}