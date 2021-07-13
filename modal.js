// Sign up

// Get the modal
var modal1 = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn = document.getElementById("signUpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal1.style.display = "grid";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

// Log in

// Get the modal
var modal2 = document.getElementById("logInModal");

// Get the button that opens the modal
var btn = document.getElementById("logInBtn");
var btn1 = document.getElementById("logInBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal2.style.display = "grid";
};
btn1.onclick = function () {
  modal2.style.display = "grid";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
