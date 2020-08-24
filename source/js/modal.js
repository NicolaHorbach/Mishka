const triggersElements = document.querySelectorAll('[data-trigger]');
const modalElement = document.querySelector('[data-triggeredBy]');
const modalBackdrop = document.querySelector('.modal-backdrop')
const showClassname = 'is-opened';
const hideClassname = 'is-hidden';

function showModal () {
  modalElement.classList.toggle(showClassname);
  modalBackdrop.classList.toggle(hideClassname);
}

triggersElements.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showModal();
  });
});

modalBackdrop.addEventListener('click', el => {
  showModal();
});
