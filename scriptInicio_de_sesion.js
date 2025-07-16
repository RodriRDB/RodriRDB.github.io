document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form-inicio-sesion');
    const registerForm = document.getElementById('form-registro');
    const loginError = document.getElementById('mensaje-error-sesion');
    const registerError = document.getElementById('mensaje-error-registro');

    // Toggle between login and register forms
    window.mostrarRegistro = () => {
        document.querySelector('.formulario-inicio-sesion').classList.add('oculto');
        document.querySelector('.formulario-registro').classList.remove('oculto');
        loginError.style.display = 'none';
    };

    window.mostrarInicioSesion = () => {
        document.querySelector('.formulario-registro').classList.add('oculto');
        document.querySelector('.formulario-inicio-sesion').classList.remove('oculto');
        registerError.style.display = 'none';
    };

    // Handle registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombres = document.getElementById('nombres-registro').value;
        const apellidos = document.getElementById('apellidos-registro').value;
        const email = document.getElementById('email-registro').value;
        const usuario = document.getElementById('usuario-registro').value;
        const contrasena = document.getElementById('contrasena-registro').value;
        const confirmarContrasena = document.getElementById('confirmar-contrasena').value;
        const sexo = document.getElementById('sexo-registro').value;
        const nacimiento = document.getElementById('nacimiento-registro').value;
        const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(input => input.value);
        const tipoCuenta = document.querySelector('input[name="tipo_cuenta"]:checked').value;

        // Validate passwords match
        if (contrasena !== confirmarContrasena) {
            registerError.textContent = 'Las contraseñas no coinciden.';
            registerError.style.display = 'block';
            return;
        }

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.usuario === usuario)) {
            registerError.textContent = 'El usuario ya existe.';
            registerError.style.display = 'block';
            return;
        }

        // Save user data
        users.push({
            nombres,
            apellidos,
            email,
            usuario,
            contrasena,
            sexo,
            nacimiento,
            intereses,
            tipoCuenta
        });
        localStorage.setItem('users', JSON.stringify(users));

        registerError.textContent = 'Registro exitoso. Por favor, inicia sesión.';
        registerError.style.color = 'green';
        registerError.style.display = 'block';
        registerForm.reset();
        setTimeout(mostrarInicioSesion, 2000);
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario-sesion').value;
        const contrasena = document.getElementById('contrasena-sesion').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.usuario === usuario && user.contrasena === contrasena);

        if (user) {
            // Store logged-in user info
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Redirect to pagina inicio
            window.location.href = 'Pagina_inicio.html';
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
            loginError.style.display = 'block';
        }
    });
});
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        document.addEventListener('DOMContentLoaded', () => {
            const saludo = document.getElementById('saludo');
            if (saludo) {
                saludo.textContent = `¡Bienvenido, ${user.nombres}!`;
            }
        });
    }