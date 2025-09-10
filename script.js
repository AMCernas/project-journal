const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});