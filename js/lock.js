const lockScreen = document.querySelector(".lock-screen");
const mainScreen = document.querySelector(".main-screen");
function unlock(event) {
  lockScreen.style.animation ='fadeOut 1s linear 1';
  mainScreen.style.display ='block';
  setTimeout(function() {
    lockScreen.style.display ='none';
  }, 1000);
}
lockScreen.addEventListener('click',unlock);