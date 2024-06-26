const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');
const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const toggle = document.querySelector('.toggle');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
//darkmode toggler//
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const d = new Date();
  const month = d.getMonth();
  const day = d.getDay();
  const date = d.getDate();
  const hours = d.getHours();
  const clockHours = hours >= 13 ? hours % 12 : hours;
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    clockHours,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeDisplay.innerHTML = `${clockHours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateDisplay.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  console.log(dateDisplay);
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
