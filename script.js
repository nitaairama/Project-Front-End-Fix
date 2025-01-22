// Go To Top Button
var topButton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Carousel Image
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function updateButtons() {
  const cardsPerView = getCardsPerView();
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled =
    currentIndex === carousel.children.length - cardsPerView;
}
function getCardsPerView() {
  const containerWidth = document.querySelector(
    ".carousel-container"
  ).offsetWidth;
  if (containerWidth <= 480) return 1;
  if (containerWidth <= 768) return 2;
  return 4;
}
function slideCarousel() {
  const cardWidth = carousel.children[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideCarousel();
    updateButtons();
  }
});
nextButton.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  if (currentIndex < carousel.children.length - cardsPerView) {
    currentIndex++;
    slideCarousel();
    updateButtons();
  }
});
window.addEventListener("resize", () => {
  slideCarousel();
  updateButtons();
});