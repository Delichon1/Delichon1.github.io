// Скрипт для раскрытия/скрытия аккордеонов в секции Skills & Tools
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('faq-active');
  });
});

//код, который заполнит полосы при загрузке
document.querySelectorAll('.progress-bar').forEach(bar => {
  const value = bar.getAttribute('aria-valuenow');
  bar.style.width = value + '%';
});
