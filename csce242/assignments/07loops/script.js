// Colors
const CAR_COLORS = ['#5b4b9e', '#22c1a0', '#8bd130', '#ee6a4f', '#241a4e', '#7fd1f2', '#a259c9'];
const randomInRange = (min, max) => Math.random() * (max - min) + min;

const createCar = (color, topPercent, leftPercent) => {
    const car = document.createElement('div');
    car.classList.add('car');
    car.style.backgroundColor = color;
    car.style.top = topPercent + '%';
    car.style.left = leftPercent + '%';
    return car;
};

// Loops car/position
const loadCars = (count, road) => {
    for (let i = 0; i < count; i++) {
        const color = CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)];
        const lane = Math.random() < 0.5 ? [8, 40] : [46, 78];
        const topPercent = randomInRange(lane[0], lane[1]);
        const leftPercent = randomInRange(0, 88);

        const car = createCar(color, topPercent, leftPercent);
        road.appendChild(car);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const road = document.getElementById('road');
    loadCars(10, road); 
});