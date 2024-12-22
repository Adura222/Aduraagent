

// Toggle Theme Button
const themeToggleButton = document.getElementById('theme-toggle');

// Event Listener to Toggle Theme
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});