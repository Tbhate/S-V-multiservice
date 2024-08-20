const headerEl = document.getElementById("header") 

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos > 110){
        headerEl.classList.add("header_mini")
    }else{
        headerEl.classList.remove("header_mini")
    }
})


document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.main-section');
    const imageUrl = '../images/cleaning.jpg';
    const img = new Image();
    img.src = imageUrl;
    img.onload = function() {
        section.style.backgroundImage = `url(${imageUrl})`;
    };
});




