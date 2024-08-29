const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        const src = this.getAttribute('data-src');
        const caption = this.querySelector('.overlay p').innerText;
        lightboxImg.src = src;
        lightboxCaption.innerText = caption;
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the slider to show the first slide
showSlide(currentSlide);


// Add event listeners to buttons
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoplay(); // Reset autoplay when user clicks manually
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoplay(); // Reset autoplay when user clicks manually
});

// Autoplay functionality
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Reset autoplay timer
function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Start autoplay on page load
startAutoplay();

// Optional: Pause autoplay on mouse hover
document.querySelector('.gallery-slider').addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

document.querySelector('.gallery-slider').addEventListener('mouseleave', () => {
    startAutoplay();
});

document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 100;
    const container = document.querySelector('.particles-container');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(particle);
    }
});

// Optional: Particle effect
document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 100;
    const container = document.querySelector('.particles-container');

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(particle);
    }
});


