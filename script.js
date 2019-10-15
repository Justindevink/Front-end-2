var button = document.getElementById("inlogknop");
var element = document.querySelector("form");

var filterbutton = document.getElementById("filterknop");
var filterelement = document.querySelector("div");

button.addEventListener("click", function() {
    element.classList.toggle("laatzien");
});

filterbutton.addEventListener("click", function() {
    filterelement.classList.toggle("filterlaatzien");
});

