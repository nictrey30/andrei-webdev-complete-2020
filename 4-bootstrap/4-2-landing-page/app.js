const btnXL = document.querySelector('.btn-xl');
const section = document.querySelector('.mySection');
btnXL.style.left = `${section.offsetWidth / 2 - btnXL.offsetWidth / 2}px`;

window.addEventListener('resize', () => {
  btnXL.style.left = `${section.offsetWidth / 2 - btnXL.offsetWidth / 2}px`;
});
