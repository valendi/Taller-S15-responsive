const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

const carouselTexts = [
    "...vestibulum mollis, tortor ac congue commodo",
    "...phasellus eleifend semper tempor",
    "...mauris mattis porttitor erat in pharetra risus"
];

let currentIndex = 0;

function updateCarousel() {
    const carouselElement = document.getElementById("carousel-text");

    carouselElement.textContent = carouselTexts[currentIndex];

    currentIndex = (currentIndex + 1) % carouselTexts.length;
}

setInterval(updateCarousel, 2000);
