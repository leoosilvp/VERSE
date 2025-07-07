document.addEventListener('DOMContentLoaded', function () {

// menu sanduiche
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

// Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    })


// carroussel fots
    const carroussel = document.querySelector('.carroussel-container');
    const slides = document.querySelectorAll('.carroussel-slide');
    const dotsContainer = document.querySelector('.carroussel-dots');

    let currentIndex = 0;
    const slideCount = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updatecarroussel() {
        carroussel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updatecarroussel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updatecarroussel();
    }

    // Auto-advance carroussel
    let carrousselInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const carrousselSection = document.querySelector('.carroussel');
    carrousselSection.addEventListener('mouseenter', () => {
        clearInterval(carrousselInterval);
    });

    carrousselSection.addEventListener('mouseleave', () => {
        carrousselInterval = setInterval(nextSlide, 5000);
    });
});