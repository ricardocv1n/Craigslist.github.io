// Función para activar el modo oscuro
function toggleDarkMode() {
    // Cambiar el estado de modo oscuro
    document.body.classList.toggle('dark-mode');

    // Cambiar el ícono del botón según el modo
    const darkModeIcon = document.getElementById('dark-mode-toggle').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
}

// Evento al hacer click en el botón de modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
