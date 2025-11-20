let currentIndex = 0;
function openDetailedCardModal(el) {
  const casestudycardEl = document.querySelector(`.${el}`);
  casestudycardEl.setAttribute("data-state", "on");
}

function closeDetailedCardModal(el) {
  currentIndex = 0;
  const casestudycardEl = document.querySelector(`.${el}`);
  casestudycardEl.setAttribute("data-state", "off");
}

function checkSlideContainerState(el) {
  const figureselides = document.querySelectorAll(`${el} > * `);
  if (currentIndex <= 0) {
    currentIndex = 0;
  } else if (currentIndex > figureselides.length - 1) {
    currentIndex = figureselides.length - 1;
  }
}

function slideLeft(el) {
  currentIndex--;
  checkSlideContainerState(el);
  const figure = document.querySelector(`${el}`);
  figure.style.translate = `-${currentIndex}00% 0`;
}

function slideRight(el) {
  currentIndex++;
  checkSlideContainerState(el);
  const figure = document.querySelector(`${el}`);
  figure.style.translate = `-${currentIndex}00% 0`;
}
