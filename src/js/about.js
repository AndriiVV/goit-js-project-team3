const refs = {
  openModalBtn: document.querySelector('[data-about-open]'),
  closeModalBtn: document.querySelector('[data-about-close]'),
  modal: document.querySelector('[data-about]'),
};

refs.closeModalBtn.addEventListener('click', toggleModal);

refs.openModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');
}
