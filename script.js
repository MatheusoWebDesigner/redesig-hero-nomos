/* =====================================================================
   NOMOS Hero — drawer lateral (mobile) + animação de entrada (GSAP)
   O drawer entra da esquerda→direita e sai da direita→esquerda com
   transição suave (CSS transform). Fecha por: hambúrguer, X, overlay,
   tecla Esc e ao escolher um link.
   ===================================================================== */

const nav     = document.querySelector('.nav');
const burger  = document.getElementById('burger');
const overlay = document.getElementById('navOverlay');
const closeBtn = document.getElementById('navClose');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
}
function toggleMenu() { setMenu(!nav.classList.contains('is-open')); }

burger?.addEventListener('click', toggleMenu);
overlay?.addEventListener('click', () => setMenu(false));
closeBtn?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
document.querySelectorAll('.nav__links a').forEach((a) =>
  a.addEventListener('click', () => setMenu(false))
);

/* ---------- Animação de entrada ---------- */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && window.gsap) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
  // clearProps: 'transform' evita que um transform residual na nav vire o
  // bloco de contenção do drawer (position:fixed) e quebre a altura total.
  tl.from('[data-anim="nav"]', { y: -20, autoAlpha: 0, duration: 0.6, clearProps: 'transform' })
    .from('[data-anim="up"]',  { y: 26, autoAlpha: 0, stagger: 0.12 }, '-=0.2');
}
