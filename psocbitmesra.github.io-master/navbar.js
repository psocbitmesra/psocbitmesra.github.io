function myFunction(x) {
  x.classList.toggle("change");
}
function myFunction2(){
  var t = document.getElementById("primary-navigation")
  if (t.className === "primary-navigation") {
    t.className += " responsive";
  } else {
    t.className = "primary-navigation";
  }
}
window.onscroll = function(){myFunction3()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction3() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
