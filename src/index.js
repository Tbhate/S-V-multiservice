const headerEl = document.getElementById("header")

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if (scrollPos > 110) {
        headerEl.classList.add("header_mini")
    } else {
        headerEl.classList.remove("header_mini")
    }
})


















let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicatorsContainer = document.getElementById('slider-indicators');
const slider = document.querySelector('.comparison-slider');
const comparisonBefore = document.querySelectorAll('.comparison-before');
const comparisonAfter = document.querySelectorAll('.comparison-after');

// Создание индикаторов динамически
function createIndicators() {
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === currentSlide) {
      indicator.classList.add('active');
    }
    indicatorsContainer.appendChild(indicator);
  }
}

// Обновление индикаторов
function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    if (i === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function showSlide(index) {
  const offset = -index * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
  updateIndicators();
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Инициализация индикаторов
createIndicators();
showSlide(currentSlide);

// Перетаскивание ползунка
function updateComparisonSlider(x) {
  const containerWidth = slider.parentElement.offsetWidth;
  const offset = Math.min(Math.max(x, 0), containerWidth);
  const percentage = (offset / containerWidth) * 100;

  comparisonAfter.forEach(afterImg => {
    afterImg.style.clip = `rect(0, ${percentage}%, 100%, 0)`;
  });

  slider.style.left = `${percentage}%`;
}

let isDragging = false;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  if (isDragging) {
    updateComparisonSlider(e.pageX - slider.parentElement.offsetLeft);
  }
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

