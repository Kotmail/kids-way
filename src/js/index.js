import { toggleExpandedAttr } from "./helpers/toggleExpandedAttr.js";

// Navbar.

const navbarToggleBtn = document.querySelector('.navbar__btn_open');
const closeBtn = document.querySelector('.navbar__btn_close');

navbarToggleBtn?.addEventListener('click', () => {
  const box = document.querySelector('.navbar__box');

  toggleExpandedAttr(navbarToggleBtn);
  box.classList.toggle('navbar__box_opened');
});

closeBtn?.addEventListener('click', () => {
  navbarToggleBtn.dispatchEvent(new Event('click'));
  navbarToggleBtn.focus();
});