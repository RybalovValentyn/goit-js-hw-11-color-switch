
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const bodyColor = document.querySelector('body');
let isRunToogleColor = false;
let isStopped = false;
let intervalId = null;

btnStart.addEventListener('click', bodyColorToogle);
btnStop.addEventListener('click',toogleColorStop)

const logger = function bodyTime() {
if (isStopped === false) {
  let bodyToogleColor = colors[randomIntegerFromInterval()]
  console.log(bodyToogleColor);
  bodyColor.style.backgroundColor = bodyToogleColor;
  isRunToogleColor = true;
};
};

function bodyColorToogle() {
  console.log('click');
  btnStart.removeEventListener('click', bodyColorToogle)
   isStopped = false;
    if (isRunToogleColor ===false){ 
     intervalId = setInterval(logger,2000);
          console.log('is run');
      };
};

function toogleColorStop() {
  btnStart.addEventListener('click', bodyColorToogle);
  clearInterval(intervalId);
   isStopped = true;
   isRunToogleColor =false
          };

const randomIntegerFromInterval = (min, max) => {
  min = 0;
  max = colors.length -1;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

