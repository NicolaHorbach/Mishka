const modalTrigger = document.querySelector('.modal-trigger');
// допустим, есть 2 таких кнопки, как заставить каждую из них открывать окно? querySelectorAll не работает в моем понимании
const modalSubmite = document.querySelector('.modal-submit')
const bodyBlackout = document.querySelector('.body-blackout');
const modal = document.querySelector('.modal');

function changeModalVisibility () {
  modal.classList.toggle('is-opened');
  bodyBlackout.classList.toggle('is-blacked-out');
}

modalTrigger.addEventListener('click', function () {
  changeModalVisibility ();
})

modalSubmite.addEventListener('click', function () {
  // тут должна быть функция добавоения в корзину
  changeModalVisibility ();
})
