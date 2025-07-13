import { Ui } from "./UI.js";
import { Country } from "./country.js";

export class Search {
  constructor() {
    // DOM elements
    this.form = document.querySelector("form");
    this.country = document.querySelector("#searchInput");
    this.loader = document.querySelector("#loader");

    // Bind form submission
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this.isValid(this.country)) {
        this.showLoader();

        // Hide home, show results section
        document.querySelector("#home-section").classList.add("d-none");
        document.querySelector("#country-section").classList.remove("d-none");

        this.countryData = new Country();
        this.ui = new Ui();

        // Fetch data from APIs
        (async () => {
          try {
            const countryName = this.country.value;

            const countryData = await this.countryData.getCountry(countryName);
            const countryDesc = await this.countryData.getCountryDescription(countryName);
            const countryImg = await this.countryData.getCountryImg(countryName);
            const cityWeather = await this.countryData.getCountryWeather(countryData[0].capital[0]);

            // Render all info to the UI
            this.ui.displayCountry(countryData[0], countryImg, countryDesc, cityWeather);

          } catch (error) {
            console.error("API Fetch Error:", error);
          } finally {
            this.hideLoader();
            this.clearInputs(this.country);
          }
        })();

      } else {
        console.warn("Invalid input: Please enter a country name.");
      }
    });
  }

  /**
   * Clear the input value after submission
   */
  clearInputs(input) {
    input.value = '';
  }

  /**
   * Validate that input is not empty
   */
  isValid(input) {
    return input.value.trim() !== "";
  }

  /**
   * Show loading spinner (fade in)
   */
  showLoader() {
    this.loader.classList.remove("d-none");
    setTimeout(() => {
      this.loader.classList.remove("opacity-0");
    }, 5); // Small delay for transition to trigger
  }

  /**
   * Hide loading spinner (fade out)
   */
  hideLoader() {
    this.loader.classList.add("opacity-0");
    setTimeout(() => {
      this.loader.classList.add("d-none");
    }, 300); // Match transition duration
  }
}
