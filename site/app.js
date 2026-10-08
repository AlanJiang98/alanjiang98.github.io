const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
function updateFilterStatus() {
  const count = document.querySelectorAll('.project:not([hidden])').length;
  document.querySelector('#filter-status').textContent = `Showing ${count} research projects`;
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.project').forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; });
  updateFilterStatus();
}));
document.querySelector('#copy-email').addEventListener('click', async () => {
  const button = document.querySelector('#copy-email');
  try {
    await navigator.clipboard.writeText('alanjjp98@gmail.com');
    button.textContent = 'Copied ✓';
    document.querySelector('#copy-status').textContent = 'Email copied to clipboard';
  } catch {
    button.textContent = 'Select the email above to copy';
    document.querySelector('#copy-status').textContent = button.textContent;
  }
  setTimeout(() => { button.textContent = 'Copy email'; }, 3000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
updateFilterStatus();
