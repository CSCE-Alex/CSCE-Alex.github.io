function showMessage() {
    console.log("Button clicked!");
}

const btnClick = document.getElementById("btn-show-message");
btnClick.onclick = showMessage;