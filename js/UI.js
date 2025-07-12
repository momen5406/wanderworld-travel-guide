export class Ui {
  displayCountry(countryData, countryImg, countryDesc, countryWeather) {
    const countrySection = document.querySelector("#country-section .container");

    let content = `
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
          <button type="button" data-bs-target="#countryCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#countryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#countryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#countryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner rounded rounded-4">
          <div class="carousel-item active">
            <img src="${countryImg.results[0].urls.raw}" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${countryImg.results[1].urls.raw}" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${countryImg.results[2].urls.raw}" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${countryImg.results[3].urls.raw}" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#countryCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#countryCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="info py-4">
        <h2>${countryData.name.common}</h2>
        <div class="my-4 description">
          ${countryDesc.extract_html}
        </div>

        <div class="info-panel mt-3">
          <div class="box">
            <h4>Flag</h3>
            <img src="${countryData.flags.png}" alt="${countryData.name.common}">
          </div>
          <div class="box">
            <h4>Capital</h3>
            <p>${countryData.capital[0]}</p>
          </div>
          <div class="box">
            <h4>Languages</h3>
            <p>${countryData.languages.spa}</p> 
            <p>Catalan</p> 
          </div>
          <div class="box">
            <h4>Population</h3>
            <p>${countryData.population}</p>
          </div>
          <div class="box">
            <h4>Region</h3>
            <p>${countryData.region}</p>
          </div>
          <div class="box">
            <h4>Currency</h3>
            <p>${countryData.currencies}</p>
          </div>
          <div class="box">
            <h4>Timezone</h3>
            <p>3:19 AM</p>
          </div>
        </div>

        <div class="weather-panel my-3">
          <h3>Weather</h3>
          <div class="row rouneded rounded-3 overflow-hidden">
            <div class="day col-md-4 col-sm-6">
              <h4>Today</h4>
              <div class="weather">
                <div class="temp d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-sun"></i>
                  <h5>34<sup>o</sup>C</h5>
                </div>
                <p>Sunny</p>
              </div>
            </div>

            <div class="day col-md-4 col-sm-6">
              <h4>Tomorrow</h4>
              <div class="weather">
                <div class="temp d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-cloud"></i>
                  <h5>34<sup>o</sup>C</h5>
                </div>
                <p>Cloudy</p>
              </div>
            </div>

            <div class="day col-md-4 col-sm-6 flex-fill">
              <h4>14/7/2025</h4>
              <div class="weather">
                <div class="temp d-flex align-items-center justify-content-center gap-2">
                  <i class="bi bi-sun"></i>
                  <h5>34<sup>o</sup>C</h5>
                </div>
                <p>Hot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    countrySection.innerHTML = content;

    document.querySelector("#country-section #exitBtn").addEventListener("click", () => {
      document.querySelector("#home-section").classList.remove("d-none");
      document.querySelector("#country-section").classList.add("d-none")
    })
  }
}