function updateClock() {
  const now = new Date();
  let hours = now.getHours() % 12 || 12;
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());
  const centiseconds = addLeadingZero(Math.floor(now.getMilliseconds() / 10));
  const date = now.toDateString();

  const timeString = `${hours}:${minutes}:${seconds}.${centiseconds}`;
  const ampmString = `${ampm}`;
  const dateString = `${date}`;

  document.getElementById('clock').textContent = timeString;
  document.getElementById('ampm').textContent = ampmString;
  document.getElementById('date').textContent = dateString;

  setTimeout(updateClock, 10);
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

updateClock(); // Initial call to display the clock immediately
