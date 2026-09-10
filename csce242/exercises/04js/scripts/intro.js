
//shows message when button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "Done!";
};

//styles the link when its clicked
document.getElementById("link-style").onclick = (e) => {
    e.preventDefault();//dont go to the links destination
    e.target.classList.add("cool-link");

};