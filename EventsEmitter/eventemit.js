const events = require('events');
const KrispyKreme = new events.EventEmitter();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

setInterval(() => {
  let event;
  if (isEven(getRandomInt(1, 100))) {
    event = 'hot-donuts-now';
  } else {
    event = 'no-donuts';
  }
  KrispyKreme.emit(event);
}, 1000);

function hotListener(callback) {
    KrispyKreme.on('hot-donuts-now', (callback));
}

function noneListner(callback) {
    KrispyKreme.on('no-donuts', (callback));
}

module.exports = {
    hotListener: hotListener,
    noneListenter: noneListner
}