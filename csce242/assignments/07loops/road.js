/* -------------------------------------------------------------
   Road Generator Script
   External CSS Art Reference: Custom vector styling via pseudo-elements
   ------------------------------------------------------------- */

// Helper function to get a random integer within a range
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate and spawn cars onto the road canvas
const createCars = (roadId, numberOfCars, colors) => {
    const road = document.getElementById(roadId);
    if (!road) return;

    // Y-Positions corresponding to Top Lane and Bottom Lane bounds
    const lanes = [
        { minY: 15, maxY: 38 },  // Top Lane
        { minY: 68, maxY: 90 }   // Bottom Lane
    ];

    for (let i = 0; i < numberOfCars; i++) {
        const car = document.createElement("div");
        car.classList.add("car");

        // Select random color, lane, and coordinates
        const randomColor = colors[getRandomInt(0, colors.length - 1)];
        const selectedLane = lanes[getRandomInt(0, lanes.length - 1)];
        
        const posX = getRandomInt(2, 90); // X percentage offset
        const posY = getRandomInt(selectedLane.minY, selectedLane.maxY); // Y pixel offset

        // Apply styles directly
        car.style.backgroundColor = randomColor;
        car.style.left = `${posX}%`;
        car.style.top = `${posY}px`;

        road.appendChild(car);
    }
};

// Spawn cars automatically when the script loads
window.onload = () => {
    const carPalette = [
        "#5c6bc0", // Indigo
        "#26a69a", // Cyan / Teal
        "#9ccc65", // Lime Green
        "#ef5350", // Red Coral
        "#283593", // Dark Navy
        "#b2ebf2", // Soft Sky Blue
        "#ab47bc"  // Light Purple
    ];

    // Function invocation using multiple parameters (roadId, count, colorArray)
    createCars("road", 8, carPalette);
};