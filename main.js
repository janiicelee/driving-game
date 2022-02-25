/* exported data */

var $car = document.querySelector('img');

window.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.keyCode === 40) {
    $car.style.transform = 'rotate(90deg)';
  } else if (event.keyCode === 37) {
    $car.style.transform = 'rotate(180deg)';
  } else if (event.keyCode === 38) {
    $car.style.transform = 'rotate(-90deg)';
  } else if (event.keyCode === 39) {
    $car.style.transform = 'rotate(0deg)';
  }
}
