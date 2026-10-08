// This page has no interpolation slider. Do not preload template frames.
const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');
function closeMenu(){burger.classList.remove('is-active');menu.classList.remove('is-active');burger.setAttribute('aria-expanded','false');}
burger.addEventListener('click',()=>{const open=burger.getAttribute('aria-expanded')!=='true';burger.classList.toggle('is-active',open);menu.classList.toggle('is-active',open);burger.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

const researchButton=document.querySelector('.navbar-link');
const dropdown=document.querySelector('.has-dropdown');
researchButton.addEventListener('click',()=>{const open=researchButton.getAttribute('aria-expanded')!=='true';researchButton.setAttribute('aria-expanded',String(open));dropdown.classList.toggle('is-active',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){researchButton.setAttribute('aria-expanded','false');dropdown.classList.remove('is-active');}});
