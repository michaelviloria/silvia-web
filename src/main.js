const headerNav = document.getElementById("headerNav");
const headerNavSticky = document.getElementById("headerNavSticky");
let coords = headerNav.getBoundingClientRect();

window.onscroll = function () {
  if(window.scrollY >= (coords.top + 52)) {
    headerNavSticky.classList.remove("no-visible");
    headerNavSticky.classList.add("show");
  }
  else {
    headerNavSticky.classList.add("no-visible");
    headerNavSticky.classList.remove("show");
  }
  console.log(window.scrollY);
  console.log(coords);
}