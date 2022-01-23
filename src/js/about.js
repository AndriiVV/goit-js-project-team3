const refs = {
    openModalBtn: document.querySelector('[data-about-open]'),
    closeModalBtn: document.querySelector('[data-about-close]'),
    modal: document.querySelector('[data-about]'),
};

// refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('keydown', toggleModal);
refs.openModalBtn.addEventListener('click', toggleModal);
// console.log('hello');

function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
}