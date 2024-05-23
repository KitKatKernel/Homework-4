function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeButton(theme);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton(savedTheme || 'light');
}

function updateThemeButton(theme) {
    const themeToggleButton = document.getElementById('themeToggle');
    if (theme === 'dark') {
        themeToggleButton.textContent = '🐉';
    } else {
        themeToggleButton.textContent = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
