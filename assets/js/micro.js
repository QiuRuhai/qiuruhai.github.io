// Tiny hover-tilt for cards. Only on devices that have hover.
(function () {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const targets = document.querySelectorAll('.work-card, .entry-card');
  targets.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateX(${(-dy * 3).toFixed(2)}deg) rotateY(${(dx * 3).toFixed(2)}deg) translateY(-3px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();
