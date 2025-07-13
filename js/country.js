export class Country {
  /**
   * Fetch country data from RestCountries API
   * @param {string} countryName - Country name (e.g., "Spain")
   * @returns {Promise<Object|null>} - Country info or null if failed
   */
  async getCountry(countryName) {
    const url = `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,flags,population,currencies,languages,region,timezones`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Country not found");

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("❌ Error fetching country data:", error);
      return null;
    }
  }

  /**
   * Fetch a summary of the country from Wikipedia
   * @param {string} country - Country name (used in URL)
   * @returns {Promise<Object|null>} - Wikipedia summary or null if failed
   */
  async getCountryDescription(country) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${country}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Wikipedia description not found");

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("❌ Error fetching Wikipedia summary:", error);
      return null;
    }
  }

  /**
   * Fetch country-related images from Unsplash
   * @param {string} country - Search term (usually country name)
   * @returns {Promise<Object|null>} - Unsplash image data or null if failed
   */
  async getCountryImg(country) {
    const accessKey = "mmOwiX4BABh3-jHTntMAnzYHvibkzV7SaXwRvbK_8vs";
    const url = `https://api.unsplash.com/search/photos?query=${country}&per_page=6&orientation=landscape&client_id=${accessKey}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Unsplash image request failed");

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("❌ Error fetching images from Unsplash:", error);
      return null;
    }
  }

  /**
   * Fetch 3-day weather forecast from WeatherAPI
   * @param {string} city - Capital city of the country
   * @returns {Promise<Object|null>} - Weather data or null if failed
   */
  async getCountryWeather(city) {
    const apiKey = "f139be639fde4586863173227252306";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Weather data not available");

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("❌ Error fetching weather data:", error);
      return null;
    }
  }
}
