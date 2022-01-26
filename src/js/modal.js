import fetchEvent from './fetchEvent';

const refs = {
  // openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

// refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', backDropClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscPress);

// }
function onCloseModal() {
  // window.removeEventListener('keydown', onEscPress);
  refs.modal.classList.add('visually-hidden');
}
function backDropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// function onEscPress(e) {
//   if (e.code === 'Escape') {
//     onCloseModal();
//   }
// }

// ============================== toggle
// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('keydown', toggleModal);

// function toggleModal() {
//   refs.modal.classList.toggle('visually-hidden');
// }
