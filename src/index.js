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

function showSlide(index) {
    const offset = -index * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);


