document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
      document.body.className = currentTheme;
      toggleButton.textContent = currentTheme === 'dark-theme' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  
    toggleButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark-theme' : 'light-theme');
      toggleButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
  });
  