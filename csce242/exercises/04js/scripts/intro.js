//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//when the number of days is entered, show a message about the plant
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const imgPlant = document.getElementById("img-plant");
    imgPlant.classList.remove("hidden");
    
    if (numDays <= 2) {
        pMessage.innerHTML = `let your plant rest its only been ${numDays} day(s).`;
        plantImage
    } else if (numDays <= 5) {
        pMessage.innerHTML = `time to water its been ${numDays} day(s).`;
        plantImage
    } else if (numDays <= 7) {
        pMessage.innerHTML = `Your plant is wilting its been ${numDays} day(s).`;
        plantimage
    } else {
        pMessage.innerHTML = "Your plant is dead!";
    }
};

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.onclick = () =>
{
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};

btnPause.onclick = () =>
{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

btnStop.onclick = () =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

//date display
setInterval(()=>{
    constpDisplay = document.getElementById("date-display");
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();
    pDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
    pDisplay.innerHTML += ` ${month}/${day}/${year}`;
}, 1000);