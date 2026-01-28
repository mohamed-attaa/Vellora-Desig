/* ========================= */
/* NAVBAR DROPDOWN */
/* ========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

/* ========================= */
/* SLIDER */
/* ========================= */

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (slides.length > 0) {

    let currentIndex = 0;
    let isAnimating = false;
    const slideIntervalTime = 6000;
    let autoSlide;

    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;

        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index]?.classList.add('active');

        setTimeout(() => {
            isAnimating = false;
        }, 1200);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, slideIntervalTime);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    startAutoSlide();
}
