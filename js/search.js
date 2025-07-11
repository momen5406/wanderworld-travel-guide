const form = document.querySelector("form");
const searchInput = document.querySelector("#searchInput");

async function getCountries(country) {
  const api = await fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,flags,population,currencies,languages,region`);

  const response  = await api.json();

  console.log(response);
  
}

async function getCountryDescription(country) {
  const api = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${country}`);

  const response  = await api.json();

  console.log(response);
  
}


// form.addEventListener("submit", (event) => {
//   event.preventDefault();
  
  getCountries("Spain");
  getCountryDescription("Spain");

  console.log(searchInput.value);
  
// })