const headerEl = document.getElementById("header")

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if (scrollPos > 110) {
        headerEl.classList.add("header_mini")
    } else {
        headerEl.classList.remove("header_mini")
    }
})


// loader

window.addEventListener('load', function () {
    
    setTimeout(function() {
        
        document.getElementById('loader').style.opacity = '0';
        
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 1000);  
        
       
        document.querySelector('.content').classList.add('show');
    }, 1800);  
});




// slider !before/after!

const ranges = document.querySelectorAll('.slider-range');
const beforeImages = document.querySelectorAll('.before');

ranges.forEach((range, index) => {
    range.addEventListener('input', function () {
        const value = this.value;
        beforeImages[index].style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
});


// slider

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


let mediaQuery1100 = window.matchMedia("(max-width: 1100px)");
let mediaQuery810 = window.matchMedia("(max-width: 810px)");


function handleMediaQueryChange() {
    if (mediaQuery810.matches) {

        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 182;
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 182;
        });
    } else if (mediaQuery1100.matches) {
        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 555;
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 555;
        });
    } else {
        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 830;
        });

        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 830;
        });
    }
}

handleMediaQueryChange();

mediaQuery1100.addEventListener("change", handleMediaQueryChange);
mediaQuery810.addEventListener("change", handleMediaQueryChange);














