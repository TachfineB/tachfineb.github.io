var button = document.getElementById("myButton");
var popup = document.getElementById("popup");

button.addEventListener("click", function() {
  popup.style.display = "block";
});

var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});
