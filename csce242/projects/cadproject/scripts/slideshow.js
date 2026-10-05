// Nav Toggle 
const toggleBtn = document.getElementById("toggle-nav");
const mainNavUl = document.querySelector("#main-nav ul");
const headerActions = document.getElementById("header-actions");

if (toggleBtn) {
    toggleBtn.onclick = (e) => {
        e.preventDefault();
        mainNavUl.classList.toggle("hide-small");
        headerActions.classList.toggle("hide-small");
    };
}

// Slideshow Helper Functions
const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)");
};

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
};

// Arrows
const rightArrow = document.getElementById("hero-arrow-right");
const leftArrow = document.getElementById("hero-arrow-left");

if (rightArrow) {
    rightArrow.onclick = (e) => {
        e.preventDefault();
        const currentSlide = getCurrentSlide();
        let nextSlide = currentSlide.nextElementSibling;

        if (nextSlide == null) {
            nextSlide = document.querySelector("#slides :first-child");
        }

        slide(currentSlide, nextSlide);
    };
}

if (leftArrow) {
    leftArrow.onclick = (e) => {
        e.preventDefault();
        const currentSlide = getCurrentSlide();
        let nextSlide = currentSlide.previousElementSibling;

        if (nextSlide == null) {
            nextSlide = document.querySelector("#slides :last-child");
        }

        slide(currentSlide, nextSlide);
    };
}