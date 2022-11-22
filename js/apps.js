const appLinks = document.querySelectorAll(".app-link");
const youTube = document.querySelector(".youtube");
const body = document.querySelector("body");

function handleLinkClick(event) {
  event.preventDefault();
  const a = event.target.parentElement;
  const url = a.href;
  a.style.opacity = 0.5;
  setTimeout(function() {
    window.open(url);
    a.style.opacity = 1;
  }, 500);
}
appLinks.forEach(item=>{item.addEventListener("click", handleLinkClick)})