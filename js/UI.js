export class Ui {
  /**
   * Renders all country-related data into the #country-section container
   * @param {Object} countryData - Data from RestCountries API
   * @param {Object} countryImg - Image results from Unsplash API
   * @param {Object} countryDesc - Summary from Wikipedia
   * @param {Object} cityWeather - Weather forecast from WeatherAPI
   */
  displayCountry(countryData, countryImg, countryDesc, cityWeather) {
    const countrySection = document.querySelector("#country-section .container");

    // --- Dynamic Carousel Slides ---
    let carouselImages = "";
    const images = countryImg.results.slice(0, 6); // Use max 6 images

    images.forEach((img, index) => {
      carouselImages += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${img.urls.raw}" alt="photo">
        </div>`;
    });

    // --- Main HTML Content ---
    const content = `
      <div class="nav d-flex align-items-center justify-content-between py-3">
        <ul class="d-flex align-items-center gap-2 p-0">
          <li>Search</li>
          <li><i class="bi bi-chevron-right"></i></li>
          <li class="country">${countryData.name.common}</li>
        </ul>
        <i id="exitBtn" class="bi bi-x exitBtn"></i>
      </div>

      <div id="countryCarousel" class="carousel slide rounded rounded-4">
        <div class="carousel-indicators">
          ${images.map((_, i) => `
            <button type="button" data-bs-target="#countryCarousel" data-bs-slide-to="${i}" 
              class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i + 1}"></button>
          `).join('')}
        </div>
        <div class="carousel-inner rounded rounded-4">
          ${carouselImages}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#countryCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#countryCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="info py-4">
        <h2>${countryData.name.common}</h2>
        <div class="my-4 description">
          ${countryDesc.extract_html}
        </div>

        <div class="info-panel mt-3">
          <div class="box">
            <h4>Flag</h4>
            <img src="${countryData.flags.png}" alt="${countryData.name.common}">
          </div>
          <div class="box">
            <h4>Capital</h4>
            <p>${countryData.capital[0]}</p>
          </div>
          <div class="box">
            <h4>Languages</h4>
            <div id='lang' class='row'></div>
          </div>
          <div class="box">
            <h4>Population</h4>
            <p>${countryData.population.toLocaleString()}</p>
          </div>
          <div class="box">
            <h4>Region</h4>
            <p>${countryData.region}</p>
          </div>
          <div class="box">
            <h4>Currency</h4>
            <div class='d-flex align-items-center fs-4'>
              <span class='me-2'>${Object.values(countryData.currencies)[0].symbol}</span>
              <p class='m-0'>${Object.values(countryData.currencies)[0].name}</p>
            </div>
          </div>
          <div class="box">
            <h4>Timezone</h4>
            <p>${countryData.timezones[0]}</p>
          </div>
        </div>

        <div class="weather-panel my-3">
          <h3>Weather in ${countryData.capital[0]}</h3>
          <div class="row rounded overflow-hidden">
            ${cityWeather.forecast.forecastday.map((day, i) => `
              <div class="day col-md-4 col-sm-6">
                <h4>${i === 0 ? "Today" : i === 1 ? "Tomorrow" : day.date}</h4>
                <div class="weather">
                  <div class="temp d-flex align-items-center justify-content-center gap-2">
                    <img src='${day.day.condition.icon}' alt='${day.day.condition.text}'>
                    <h5>${i === 0 ? cityWeather.current.temp_c : day.day.avgtemp_c}<sup>o</sup>C</h5>
                  </div>
                  <p>${day.day.condition.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Inject all content
    countrySection.innerHTML = content;

    // --- Render Languages ---
    const langSection = document.querySelector("#lang");
    const langs = Object.values(countryData.languages)
      .map(lang => `<p class='col-6'>${lang}</p>`)
      .join("");
    langSection.innerHTML = langs;

    // --- Handle Exit Button ---
    document.querySelector("#exitBtn").addEventListener("click", () => {
      document.querySelector("#home-section").classList.remove("d-none");
      document.querySelector("#country-section").classList.add("d-none");
    });
  }
}
