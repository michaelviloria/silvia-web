const headerNav = document.getElementById("headerNav");

window.onscroll = function () {
  if(window.scrollY >= 598) {
    headerNav.classList.remove("no-visible");
    headerNav.classList.add("show");
  }
  else {
    headerNav.classList.add("no-visible");
    headerNav.classList.remove("show");
  }
  console.log(window.scrollY);
}