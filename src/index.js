const headerEl = document.getElementById("header")

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if (scrollPos > 110) {
        headerEl.classList.add("header_mini")
    } else {
        headerEl.classList.remove("header_mini")
    }
})






// slider !before/after!

const range = document.querySelector('.slider-range');
const beforeImage = document.querySelector('.before');

range.addEventListener('input', function() {
  const value = this.value;
  beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
















