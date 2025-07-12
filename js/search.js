import { Ui } from "./UI.js";
import { Country } from "./country.js"

export class Search {
  constructor () {
    this.form = document.querySelector("form");
    this.country = document.querySelector("#searchInput");
    
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if ( this.isValid(this.country) ) {
        console.log(this.country.value);
        document.querySelector("#home-section").classList.add("d-none");
        document.querySelector("#country-section").classList.remove("d-none");

        this.countryData = new Country();
        this.ui = new Ui();


        (async () => {
          const countryData = await this.countryData.getCountry(this.country.value);
          const countryDesc = await this.countryData.getCountryDescription(this.country.value);
          const countryImg = await this.countryData.getCountryImg(this.country.value);

          this.ui.displayCountry(countryData[0], countryImg, countryDesc, "c");

        })();
        
        
        
      } else {
        console.log("false");
      }
    })
  }

  isValid(input) {
    if ( input.value != '' ) {
      return true;
    } else {
      return false;
    }
  }

  displayData(countryData, countryImg, countryDesc, countryWeather) {
    this.ui = new Ui();
    this.ui.displayCountry(countryData, countryImg, countryDesc, countryWeather);
  }
}