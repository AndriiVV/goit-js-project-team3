const refs = {
  openModalBtn: document.querySelector('[data-about-open]'),
  closeModalBtn: document.querySelector('[data-about-close]'),
  modal: document.querySelector('[data-about]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', backDropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscPress);
  refs.modal.classList.remove('visually-hidden');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscPress);
  refs.modal.classList.add('visually-hidden');
}
function backDropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
