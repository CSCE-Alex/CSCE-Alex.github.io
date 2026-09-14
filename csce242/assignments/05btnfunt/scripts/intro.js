document.addEventListener("DOMContentLoaded", () => {
    /* Column 1: Speech Bubble */
    const speechCard = document.getElementById("speech-card");
    const speechBubble = document.getElementById("speech-bubble");
    const toggleSpeechBubble = () => {
        speechBubble.classList.toggle("hidden");
    };

    speechCard.addEventListener("click", toggleSpeechBubble);

    /* Column 2: Beverage Selection */
    const beverageSelect = document.getElementById("beverage-select");
    const beverageResult = document.getElementById("beverage-result");
    const beverageCard = document.getElementById("beverage-card");
    beverageCard.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    const updateBeverageText = (event) => {
        const chosenBeverage = event.target.value;
        if (chosenBeverage) {
            beverageResult.textContent = `${chosenBeverage}: Nice Choice!`;
        }
    };

    beverageSelect.addEventListener("change", updateBeverageText);

    /* Column 3: Sticker Placement */
    const sunImage = document.getElementById("sun-image");
    const sticker = document.getElementById("sticker");
    const stickerCard = document.getElementById("sticker-card");

    stickerCard.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    const addSticker = () => {
        sticker.classList.remove("hidden");
    };

    sunImage.addEventListener("click", addSticker);
});