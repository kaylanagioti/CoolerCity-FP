function imgSlider(anything){
    document.querySelector('.cc').src = anything;
}
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-container");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // ganti gambar setiap 3 detik
}