//when arrow is clicked show the next image
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelectorAll("slides :not(.hidden)")[0];
    console.log(currentSlide);
}