export class Country {
  async getCountry(countryName) {
    const countryUrl = `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,flags,population,currencies,languages,region`;

    const api = await fetch(countryUrl);
    const response  = await api.json();

    console.log(response);
    return response;
  }

  async getCountryDescription(country) {
    const descriptionUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${country}`;
    const api = await fetch(descriptionUrl);

    const response  = await api.json();

    console.log(response);
    return response;
  }

  async getCountryImg(country) {
    const accessKey = "mmOwiX4BABh3-jHTntMAnzYHvibkzV7SaXwRvbK_8vs";
    const imgUrl = `https://api.unsplash.com/search/photos?query=${country}&per_page=6&orientation=landscape&client_id=${accessKey}`;

    const api = await fetch(imgUrl);
    const response  = await api.json();

    console.log(response);
    return response;
  }

  async getCountryWeather(country) {
    const weatherUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${country}`;
    const api = await fetch(weatherUrl);

    const response  = await api.json();

    console.log(response);
    return response;
  }
}