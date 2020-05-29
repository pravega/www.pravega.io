function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the modal
var modal = document.getElementById("myModalp");

// Get the button that opens the modal
var btn = document.getElementById("myBtnp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var vid = document.getElementById("myvid");
window.addEventListener("click", function(event) {
  vid.pause();
});

var vid1 = document.getElementById("myvid1");
window.addEventListener("click", function(event) {
  vid1.pause();
});

var vid2 = document.getElementById("myvid2");
window.addEventListener("click", function(event) {
  vid2.pause();
});

var vid3 = document.getElementById("myvid3");
window.addEventListener("click", function(event) {
  vid3.pause();
});

var vid4 = document.getElementById("myvid4");
window.addEventListener("click", function(event) {
  vid4.pause();
});

var vid5 = document.getElementById("myvid5");
window.addEventListener("click", function(event) {
  vid5.pause();
});

var vid6 = document.getElementById("myvid6");
window.addEventListener("click", function(event) {
  vid6.pause();
});

var vid7 = document.getElementById("myvid7");
window.addEventListener("click", function(event) {
  vid7.pause();
});
