const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('.portrait-frame img')?.addEventListener('error', (event) => {
  event.currentTarget.classList.add('image-unavailable');
  event.currentTarget.nextElementSibling.style.zIndex = '2';
});

document.querySelector('#lead-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = document.documentElement.lang === 'en'
    ? 'Thank you. Your request is ready to be sent.'
    : 'Bedankt. Uw aanvraag staat klaar om te versturen.';
  // Connect this form to the chosen CRM or email endpoint before publishing.
});
