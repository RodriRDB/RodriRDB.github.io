// Bidimensional array para almacenar los ítems del carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id, titulo, precio) {
    const itemIndex = carrito.findIndex(item => item[0] === id);
    if (itemIndex > -1) {
        carrito[itemIndex][2] += 1; 
    } else {
        carrito.push([id, titulo, 1, precio]); 
    }
    actualizarCarrito(); 
}

// Función que actualiza el contenido del carrito en el modal
function actualizarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    let itemCount = 0;

    cartItems.innerHTML = ''; 
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach(item => {
            const [id, titulo, cantidad, precio] = item;
            const subtotal = (cantidad * precio).toFixed(2);
            total += parseFloat(subtotal);
            itemCount += cantidad;

            // Crea el elemento visual de cada producto en el carrito
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${titulo} - $${precio.toFixed(2)} x ${cantidad} = $${subtotal}</p>
                <button onclick="cambiarCantidad('${id}', ${cantidad + 1})">+</button>
                <button onclick="cambiarCantidad('${id}', ${cantidad - 1})">-</button>
                <button onclick="eliminarDelCarrito('${id}')">Eliminar</button>
            `;
            cartItems.appendChild(itemElement);
        });
    }

    // Muestra el total de ítems y el precio total
    cartCount.textContent = itemCount;
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(id, nuevaCantidad) {
    const itemIndex = carrito.findIndex(item => item[0] === id);
    if (nuevaCantidad <= 0) {
        carrito.splice(itemIndex, 1); 
    } else {
        carrito[itemIndex][2] = nuevaCantidad; 
    }
    actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item[0] !== id);
    actualizarCarrito();
}

// Función para abrir el modal del carrito
function abrirCarrito() {
    document.getElementById('cart-modal').style.display = 'block';
    actualizarCarrito();
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Función para mostrar el modal de pago
function mostrarPago() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    cerrarCarrito();
    document.getElementById('payment-modal').style.display = 'block';
}

// Función para cerrar el modal de pago
function cerrarPago() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('payment-error').textContent = '';
    document.getElementById('payment-form').reset();
}

// Evento que gestiona el envío del formulario de pago
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Recolectamos datos del formulario
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvc = document.getElementById('card-cvc').value;
    const errorElement = document.getElementById('payment-error');

    // Validación básica
    if (!cardNumber || !cardName || !cardExpiry || !cardCvc) {
        errorElement.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Simulación de pago exitoso
    alert('¡Compra exitosa! Gracias por tu compra.');
    carrito = [];
    cerrarPago(); 
    actualizarCarrito(); 
    window.location.href = 'libreria.html'; 
});

// Muestra la fecha actual en formato español
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
})}`;

// Efecto de desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});