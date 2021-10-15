const openModal = (modal) => {
  modal.classList.add(`modal--show`);
  modal.focus();
  modal.querySelector(`.modal__close-btn`).addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modal.classList.remove(`modal--show`);
  });
}

const writeUsBtn = document.querySelector(`.contact__write-us`);
const writeModal = document.querySelector(`.modal--write-us`);

if (!!writeUsBtn && !!writeModal) {
  writeUsBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openModal(writeModal);
    writeModal.querySelector(`input`).focus();
  });
}


const mapBtn = document.querySelector(`.contact__map`);
const mapModal = document.querySelector(`.modal--map`);

if (!!mapBtn && !!mapModal) {
  mapBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openModal(mapModal);
  });
}
