const slider = document.querySelector("#sliderWrapper");
const rightButton = document.querySelector("#sliderRightButton");
const leftButton = document.querySelector("#sliderLeftButton");

function getTranslateX(elem) {
  const style = window.getComputedStyle(elem);
  const transform = style.transform;

  if (transform && transform !== 'none') {
    const matrixValues = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
    const translateX = parseFloat(matrixValues[4]);
    return translateX;
  }

  return 0;
}

rightButton.addEventListener("click", () => {
  const width = slider.offsetWidth;
  const translatedX = getTranslateX(slider);

  const newTranslateX = -(Math.abs(translatedX) + width + 16);

  if ( Math.abs(newTranslateX) < slider.scrollWidth ) {
    slider.style.transform = `translateX(${newTranslateX}px)`;
  }

});

leftButton.addEventListener("click", () => {
  const width = slider.offsetWidth;
  const translatedX = getTranslateX(slider);

  const newTranslateX = Math.min(translatedX + width + 16, 0);
  slider.style.transform = `translateX(${newTranslateX}px)`;

});

