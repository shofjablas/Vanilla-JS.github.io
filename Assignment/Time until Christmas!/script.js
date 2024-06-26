const countDay = document.querySelector('h2#count-day');

function countClock() {
  //   const date = new Date();
  const goalDay = new Date('wed Dec 25 2024 00:00:00');
  const currentDay = new Date();

  const timeDifference = goalDay - currentDay;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countDay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countClock();
setInterval(countClock, 1000);
