const phoneButton = document.querySelectorAll(".phone-button");
const phoneNumber = document.querySelector(".phone__number");
const eraseButton = document.querySelector(".phone-button__erase");
const callButton = document.querySelector(".phone-button__call");
const phoneScreen = document.querySelector(".phone-screen");
const callScreen = document.querySelector(".call-screen");
let nums = [];
function printNumber() {
  phoneNumber.innerText = '';
  if (nums.length > 11){
    phoneNumber.innerText = nums.join('');
  }
  else if (nums.length == 11) {
    for (let i = 0; i < 11; i++) {
      if (i == 3 || i == 7) phoneNumber.innerText += '-';
      phoneNumber.innerText += nums[i];
    }
  }
  else {
    for (let i = 0; i < nums.length; i++) {
      if (i == 3 || i == 6) phoneNumber.innerText += '-';
      phoneNumber.innerText += nums[i];
    }
  }
}
function call(){
  phoneScreen.style.animation ='fadeOut 0.3s linear 1';
  callScreen.style.display ='block';
  setTimeout(function() {
    phoneScreen.style.display ='none';
  }, 300)
}
function button_click(event) {
  const button = event.target;
  button.style.animation  ='none';
  button.offsetHeight;
  button.style.animation = "clicked 0.5s linear 1";
  if (button == eraseButton) {
    localStorage;
    nums.pop();
  }
  else if (button == callButton) {
    call();
  }
  else nums.push(button.innerText);
  printNumber();
}
phoneButton.forEach(item => item.addEventListener('click',button_click));