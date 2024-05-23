// Handles theme toggling between light and dark modes and saves preference on which


// Function to toggle theme between light and dark modes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
    updateThemeButton(theme);
}

// Function to apply the saved theme from localStorage
function applySavedTheme() {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeButton('dark');
    } else {
        updateThemeButton('light');
    }
}

// Changes the emoji on the button's text based on the current theme
function updateThemeButton(theme) {
    let button = document.getElementById('themeToggle');
    if (theme === 'dark') {
        button.textContent = '🐉';
    } else {
        button.textContent = '☀️';
    }
}

// Runs applySavedTheme when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
