// Datos de los catálogos (libros y precios)
const catalogos = {
    planeta: [
        ["Cien años de soledad", 20],
        ["El amor en los tiempos del cólera", 18],
        ["Sapiens", 25],
        ["Harry Potter", 15]
    ],
    penguin: [
        ["1984", 12],
        ["Orgullo y Prejuicio", 10],
        ["El principito", 8],
        ["Dune", 22]
    ],
    alfaguara: [
        ["La ciudad y los perros", 15],
        ["Conversación en la catedral", 20],
        ["Rayuela", 18],
        ["Crónica de una muerte anunciada", 16]
    ]
};

// Calcula el precio promedio de un catálogo
function calcularPromedioPrecios(catalogo) {
    let suma = 0;
    for (let i = 0; i < catalogo.length; i++) {
        suma += catalogo[i][1]; // Acumula los precios
    }
    return (suma / catalogo.length).toFixed(2); // Promedio con 2 decimales
}

// Compara dos catálogos seleccionados
function compararCatalogos() {
    const catalogo1 = document.getElementById('catalogo1').value;
    const catalogo2 = document.getElementById('catalogo2').value;
    const resultado = document.getElementById('resultado-comparacion');

    // Validación: ambos deben estar seleccionados
    if (!catalogo1 || !catalogo2) {
        resultado.textContent = "Selecciona ambos catálogos.";
        resultado.classList.remove('success', 'error');
        resultado.classList.add('error');
        return;
    }

    // Validación: deben ser diferentes
    if (catalogo1 === catalogo2) {
        resultado.textContent = "Selecciona catálogos diferentes.";
        resultado.classList.remove('success', 'error');
        resultado.classList.add('error');
        return;
    }

    // Extraer datos
    const arr1 = catalogos[catalogo1];
    const arr2 = catalogos[catalogo2];

    const promedio1 = calcularPromedioPrecios(arr1);
    const promedio2 = calcularPromedioPrecios(arr2);

    let mensaje;

    // Comparación según cantidad de libros y precios
    if (arr1.length === arr2.length) {
        switch (true) {
            case promedio1 === promedio2:
                mensaje = `Ambos catálogos tienen ${arr1.length} libros con un precio promedio de $${promedio1}.`;
                resultado.classList.remove('success', 'error');
                resultado.classList.add('success');
                break;
            default:
                mensaje = `${catalogo1} (${arr1.length} libros, promedio $${promedio1}) vs ${catalogo2} (${arr2.length} libros, promedio $${promedio2}).`;
                resultado.classList.remove('success', 'error');
                resultado.classList.add('error');
                break;
        }
    } else {
        mensaje = `${catalogo1} (${arr1.length} libros, promedio $${promedio1}) vs ${catalogo2} (${arr2.length} libros, promedio $${promedio2}).`;
        resultado.classList.remove('success', 'error');
        resultado.classList.add('error');
    }

    // Mostrar resultado con animación de opacidad
    resultado.textContent = mensaje;
    resultado.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        resultado.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
}

// Desplazamiento suave para anclas internas
// Mejora la experiencia de navegación en el mismo documento
// Ejemplo: al hacer clic en "Volver al inicio"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
