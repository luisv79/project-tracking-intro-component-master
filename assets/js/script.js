function menu() {
  var menuMobile = document.getElementById("menu-mobile");
  var hamburger = document.querySelector(".hamburger");
  var close = document.querySelector(".close");
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
  } else {
    menuMobile.style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "block";
  }
}


