const alertButton = document.getElementById("mybutton");
mybutton.addEventListener("click", function () { alert("button clicked") });

const colourBackground = document.querySelector(".blue-background");
const changeBackgroundButton = document.getElementById("mybutton1");
mybutton1.addEventListener("click", function () { colourBackground.classList.toggle("red-background") });

