const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menuButton");
const exitBtn = document.querySelector("#exitButton");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)"
});

exitBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)"
})