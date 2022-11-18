const clocks = document.querySelectorAll("span#clock");
const dates = document.querySelectorAll("span#date");
const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
function getClock() {
    const today = new Date();
    const day = days[today.getDay()];
    const month = months[today.getMonth()];
    const date = String(today.getDate()).padStart(2,"0");
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes =String(today.getMinutes()).padStart(2,"0");
    clocks.forEach(el=> el.innerText = `${hours}:${minutes}`);
    dates.forEach(el => el.innerText = `${day}, ${month} ${date}`);
}
getClock(); //getClock을 처음에 바로 호출하기.
setInterval(getClock, 1000)