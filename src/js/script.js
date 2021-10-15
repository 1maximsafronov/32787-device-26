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


const servicesBlock = document.querySelector(`.services`);

if (!!servicesBlock) {
  const servicesNavBtns = servicesBlock.querySelectorAll(`.services__nav-btn`);
  const servicesSlides = servicesBlock.querySelectorAll(`.services__item`);

  const toggleServiceSlide = (number) => {
    servicesBlock.querySelector(`.services__nav-btn--current`).classList.remove(`services__nav-btn--current`);
    servicesBlock.querySelector(`.services__item--current`).classList.remove(`services__item--current`);

    servicesNavBtns[number].classList.add(`services__nav-btn--current`);
    servicesSlides[number].classList.add(`services__item--current`);
  }

  servicesNavBtns.forEach((item, index) => {
    item.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (!item.classList.contains(`services__nav-btn--current`)) {
        toggleServiceSlide(index);
      }
    })
  })
}


const promo = document.querySelector(`.promo`);

if (!!promo) {

  const promoSlides = promo.querySelectorAll(`.promo__item`);
  const promoToggles = promo.querySelectorAll(`.promo__toggl`);

  const togglePromoSlide = (number) => {
    promo.querySelector(`.promo__toggl--active`).classList.remove(`promo__toggl--active`);
    promo.querySelector(`.promo__item--current`).classList.remove(`promo__item--current`);

    promoToggles[number].classList.add(`promo__toggl--active`);
    promoSlides[number].classList.add(`promo__item--current`);
  }

  promoToggles.forEach((item, index) => {
    item.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (!item.classList.contains(`promo__toggl--active`)) {
        togglePromoSlide(index);
      }
    })
  })

}
