//exercise 1 
document.getElementById("link-exercise-1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("missing-class-section").classList.remove("hidden");
    document.getElementById("semester-section").classList.add("hidden");
    document.getElementById("link-exercise-1").classList.add("active");
    document.getElementById("link-exercise-2").classList.remove("active");
};
//exercise 2
document.getElementById("link-exercise-2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("semester-section").classList.remove("hidden");
    document.getElementById("missing-class-section").classList.add("hidden");
    document.getElementById("link-exercise-2").classList.add("active");
    document.getElementById("link-exercise-1").classList.remove("active");
    calculateSemesterCountdown();
};
//toggles the navigation menu on small screens
document.getElementById("toggle-nav").onclick = (e) => {
    e.preventDefault();
    const navList = document.querySelector("#main-nav ul");
    const arrow = document.getElementById("toggle-arrow");
    navList.classList.toggle("hide-small");
    arrow.innerHTML = navList.classList.contains("hide-small") ? "&#9660;" : "&#9650;";
};
 
//calculates the point deduction for missing class based on days entered
document.getElementById("txt-days-missed").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pResult = document.getElementById("p-deduction-result");
    const pMessage = document.getElementById("p-deduction-message");
    const totalClasses = 25;
    const attendanceWorth = 7;
 
    if(isNaN(numDays) || numDays < 0){
        pResult.innerHTML = "";
        pMessage.innerHTML = "";
        return;
    }
 
    const percentLost = (numDays / totalClasses) * attendanceWorth;
    pResult.innerHTML = `You will lose ${percentLost.toFixed(1)}% for skipping ${numDays} day(s).`;
 
    if(numDays === 0){
        pMessage.innerHTML = "Perfect attendance! Keep it up all semester.";
    } else if(numDays <= 2){
        pMessage.innerHTML = "That's a small hit, but try not to miss any more.";
    } else if(numDays <= 5){
        pMessage.innerHTML = "Be careful, you're starting to miss valuable class time.";
    } else if(numDays <= 9){
        pMessage.innerHTML = "This is not an online class, you are missing valuable learning oportunities.";
    } else {
        pMessage.innerHTML = "You are missing a significant amount of class, this will really hurt your grade.";
    }
};

//calculates how many days are left until the last day of class
const calculateSemesterCountdown = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    let lastDay = new Date(currentYear, 11, 4);
 
    if(today > lastDay){
        lastDay = new Date(currentYear + 1, 11, 4);
    }
 
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((lastDay - today) / msPerDay);
    const pDaysLeft = document.getElementById("p-days-left");
    const pMessage = document.getElementById("p-semester-message");
    pDaysLeft.innerHTML = daysLeft;
 
    if(daysLeft > 150){
        pMessage.innerHTML = "Not time to start counting down yet.";
    } else if(daysLeft > 100){
        pMessage.innerHTML = "The semester is just getting started!";
    } else if(daysLeft > 50){
        pMessage.innerHTML = "We're moving along, keep up the momentum!";
    } else if(daysLeft > 10){
        pMessage.innerHTML = "The end is in sight, keep pushing!";
    } else if(daysLeft > 0){
        pMessage.innerHTML = "Almost there! Final stretch of the semester!";
    } else if(daysLeft === 0){
        pMessage.innerHTML = "Today is the last day of class!";
    } else {
        pMessage.innerHTML = "The semester has ended. Enjoy your break!";
    }
};