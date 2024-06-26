const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes());
  const getSeconds = String(date.getSeconds());
  clock.innerText = `${hours}: ${minutes}: ${getSeconds}`;
}

getClock();
setInterval(getClock, 1000);
