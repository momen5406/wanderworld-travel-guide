// Import modules
import "./slider.js";
import { Search } from "./search.js";

// Wait until the full page (images, styles, etc.) is loaded
window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");

  // Start fade-out transition
  loader.classList.add("opacity-0");

  // Fully hide after animation ends (match CSS transition duration)
  setTimeout(() => {
    loader.classList.add("d-none");
  }, 300);
});

// Initialize search functionality
new Search();
