const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  // To turn seconds value into degrees (of full rotation around a circle), first turn into a number with a base 100 (seconds / 60 to get decimal value out of 100), then multiply by 360. Adding 90 to offset default rotation of 90deg (to make hand vertical)
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Prevents hand noticeable rewinding to start in a counterclockwise direction - this awkward movement is visible because it's set to 0.05s in CSS; making this movement instantaneous
  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s';
    minuteHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  }
}

setInterval(setDate, 1000);
