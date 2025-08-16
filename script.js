const toggleBtn = document.getElementById('darkToggle');
const circle = toggleBtn.querySelector('.toggle-circle');
const body = document.body;

const themes = ['light', 'dark', 'red'];
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme on page load
applyTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
  const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
  currentTheme = themes[nextIndex];
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
});

function applyTheme(theme) {
  // Remove all theme classes
  body.classList.remove('light-mode', 'dark-mode', 'red-mode');

  // Update theme and circle icon
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    circle.textContent = '☀️';
  } else if (theme === 'red') {
    body.classList.add('red-mode');
    circle.textContent = '❤️';
  } else {
    body.classList.add('light-mode');
    circle.textContent = '🌙';
  }
}
