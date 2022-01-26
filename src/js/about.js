const refs = {
  openModalBtn: document.querySelector('[data-about-open]'),
  closeModalBtn: document.querySelector('[data-about-close]'),
  modal: document.querySelector('[data-about]'),
  teamLead: document.querySelector(".team-lead "),
  upDev: document.querySelector(".team-up"),
  upDevLeft: document.querySelector(".team__upLeft"),
  downLeft: document.querySelector(".team__downLeft"),
  down: document.querySelector(".team__down"),
  downRight: document.querySelector(".team__downRight"),
  title: document.querySelector(".title-team")
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', backDropClick);

function onOpenModal() {
  refs.teamLead.classList.add('animate__fadeInTopLeft')
  refs.upDev.classList.add('animate__fadeInDown')
  refs.upDevLeft.classList.add('animate__fadeInTopRight')
  refs.downLeft.classList.add('animate__fadeInBottomLeft')
  refs.down.classList.add('animate__fadeInUp')
  refs.downRight.classList.add('animate__fadeInBottomRight')
  refs.title.classList.add('animate__zoomInUp')
  
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
