document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const saludo = document.getElementById('saludo');

    if (user && saludo) {
        saludo.textContent = `¡Bienvenido, ${user.nombres}!`;
    } else {
        // Si no hay usuario en sesión, redirigir a login
        window.location.href = 'inicio_sesion.html';
    }

    // Lógica opcional para botón de cerrar sesión (si lo añades en HTML)
    const cerrarSesionBtn = document.getElementById('cerrar-sesion-btn');
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'inicio_sesion.html';
        });
    }
});
