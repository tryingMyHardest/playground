var nav = document.querySelector(".navBar");

window.onscroll = function () {handleScroll()};

const handleScroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    // Show nav
    nav.classList.add("display");
  } else {
    // Hide nav
    nav.classList.remove("display");
  }
}