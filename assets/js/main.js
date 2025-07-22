const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
});
