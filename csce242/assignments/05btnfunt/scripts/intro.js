document.addEventListener("DOMContentLoaded", () => {
    /* Speech */
    const speechCard = document.getElementById("speech-card");
    const speechBubble = document.getElementById("speech-bubble");

    speechCard.addEventListener("click", () => {
        speechBubble.classList.toggle("hidden");
    });

    /* Beverage */
    const beverageSelect = document.getElementById("beverage-select");
    const beverageResult = document.getElementById("beverage-result");

    beverageSelect.addEventListener("change", (event) => {
        const chosenBeverage = event.target.value;
        if (chosenBeverage) {
            beverageResult.textContent = `${chosenBeverage}: Nice Choice!`;
        }
    });

    /* sticker */
    const sunImage = document.getElementById("sun-image");
    const sticker = document.getElementById("sticker");

    sunImage.addEventListener("click", (event) => {
        event.stopPropagation();
        sticker.classList.remove("hidden");
    });
});