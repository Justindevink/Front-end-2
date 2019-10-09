var button = document.getElementById("inlogknop");
var element = document.querySelector("form");

button.addEventListener("click", function() {
    element.classList.toggle("laatzien");
});

