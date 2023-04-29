var x = document.getElementById("box");
var y = document.getElementById("reels");
var z = document.getElementById("tag");
function pic() {
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}

function reels() {
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
}
function tag() {
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";
}
var f = document.getElementById("follow");

function flw() {
  f.innerHTML = "Following";
  f.style.backgroundColor = "gray";
}
function unf() {
  f.innerHTML = "Follow";
  f.style.backgroundColor = "lightgreen";
}