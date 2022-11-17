const alertBox = document.querySelector(".alert");
const alertButton = alertBox.querySelector("button");

function alert(title, msg) {
  alertBox.style.display = "block";
  const alertTitle = alertBox.querySelector(".alert__title");
  const alertMsg = alertBox.querySelector(".alert__msg");
  alertTitle.innerText = title;
  alertMsg.innerText = msg;
}

function ok(event) {
  alertBox.style.display ="none";
}
alertButton.addEventListener("click",ok)