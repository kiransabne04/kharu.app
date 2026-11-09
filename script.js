document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const strip = document.getElementById('screenshot-strip');
if (strip) {
  document.querySelectorAll('[data-strip-dir]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = Number(button.dataset.stripDir);
      const item = strip.querySelector('figure');
      if (!item) return;
      const gap = parseFloat(getComputedStyle(strip).columnGap) || 0;
      strip.scrollBy({
        left: direction * (item.getBoundingClientRect().width + gap),
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  });
}
