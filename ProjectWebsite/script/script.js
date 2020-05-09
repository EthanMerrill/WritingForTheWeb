var slideIndex = 0;
showSlides(slideIndex);
console.log('yesyt')
    //when called starts the slideshow
function autoplaySlides() {
    setInterval(plusSlides, 5000, 1)

};
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides)
    console.log(slideIndex - 1)
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}