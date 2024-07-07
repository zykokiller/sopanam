// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;

    function slideCarousel() {
        index++;
        if (index === carouselImages.children.length) {
            index = 0;
        }
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideCarousel, 2000); // Slide every 2 seconds
});
