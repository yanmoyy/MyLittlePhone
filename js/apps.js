const appLinks = document.querySelectorAll(".app-link");

function handleLinkClick(event) {
  event.preventDefault();
  const a = event.target.parentElement;
  const url = a.href;
  a.style.opacity = 0.5;
  console.log(url);
  setTimeout(function() {
    window.location.href = url;
  }, 500);
}
appLinks.forEach(item=>{item.addEventListener("click", handleLinkClick)})