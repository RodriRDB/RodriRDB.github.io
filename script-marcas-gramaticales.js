const marcasGramaticales = [
            ["casa", "Sustantivo femenino, singular. Plural: casas. Designa un lugar de vivienda."],
            ["comer", "Verbo transitivo, primera conjugación (-er). Infinitivo: comer, participio: comido, gerundio: comiendo."],
            ["sol", "Sustantivo masculino, singular. Plural: soles. Refiere al astro rey."],
            ["belleza", "Sustantivo femenino, singular. Plural: bellezas. Indica cualidad estética."],
            ["jugar", "Verbo intransitivo, primera conjugación (-ar). Infinitivo: jugar, participio: jugado, gerundio: jugando."],
            ["libro", "Sustantivo masculino, singular. Plural: libros. Objeto de lectura."],
            ["rápido", "Adjetivo, masculino singular. Femenino: rápida, plural: rápidos, rápidas. Describe velocidad."],
            ["luna", "Sustantivo femenino, singular. Plural: lunas. Satélite natural."],
            ["caminar", "Verbo intransitivo, primera conjugación (-ar). Infinitivo: caminar, participio: caminado, gerundio: caminando."],
            ["árbol", "Sustantivo masculino, singular. Plural: árboles. Planta leñosa."],
            ["feliz", "Adjetivo, invariable en género, singular. Plural: felices. Describe alegría."],
            ["agua", "Sustantivo femenino, singular. Plural: aguas. Sustancia líquida."],
            ["cantar", "Verbo intransitivo/transitivo, primera conjugación (-ar). Infinitivo: cantar, participio: cantado, gerundio: cantando."],
            ["cielo", "Sustantivo masculino, singular. Plural: cielos. Espacio visible sobre la Tierra."],
            ["alto", "Adjetivo, masculino singular. Femenino: alta, plural: altos, altas. Describe elevación."],
            ["vivir", "Verbo intransitivo, tercera conjugación (-ir). Infinitivo: vivir, participio: vivido, gerundio: viviendo."],
            ["mesa", "Sustantivo femenino, singular. Plural: mesas. Mueble para comer o trabajar."],
            ["fuego", "Sustantivo masculino, singular. Plural: fuegos. Fenómeno de combustión."],
            ["bueno", "Adjetivo, masculino singular. Femenino: buena, plural: buenos, buenas. Indica calidad positiva."],
            ["amar", "Verbo transitivo, primera conjugación (-ar). Infinitivo: amar, participio: amado, gerundio: amando."],
            ["calle", "Sustantivo femenino, singular. Plural: calles. Vía urbana."],
            ["gato", "Sustantivo masculino, singular. Plural: gatos. Mamífero doméstico."],
            ["rápidamente", "Adverbio. Modifica un verbo indicando rapidez."],
            ["sol", "Sustantivo masculino, singular. Plural: soles. Astro central del sistema solar."],
            ["cantar", "Sustantivo masculino, singular. Plural: cantares. Acción de emitir sonidos melódicos."],
            ["mujer", "Sustantivo femenino, singular. Plural: mujeres. Persona de sexo femenino."],
            ["correr", "Verbo intransitivo, segunda conjugación (-er). Infinitivo: correr, participio: corrido, gerundio: corriendo."],
            ["ciudad", "Sustantivo femenino, singular. Plural: ciudades. Asentamiento urbano."],
            ["hermoso", "Adjetivo, masculino singular. Femenino: hermosa, plural: hermosos, hermosas. Describe belleza."],
            ["aprender", "Verbo transitivo, segunda conjugación (-er). Infinitivo: aprender, participio: aprendido, gerundio: aprendiendo."],
            ["flor", "Sustantivo femenino, singular. Plural: flores. Parte reproductiva de la planta."],
            ["río", "Sustantivo masculino, singular. Plural: ríos. Corriente de agua."],
            ["fácil", "Adjetivo, invariable en género, singular. Plural: fáciles. Describe simplicidad."],
            ["escribir", "Verbo transitivo, tercera conjugación (-ir). Infinitivo: escribir, participio: escrito, gerundio: escribiendo."],
            ["luz", "Sustantivo femenino, singular. Plural: luces. Radiación visible."],
            ["perro", "Sustantivo masculino, singular. Plural: perros. Mamífero doméstico."],
            ["contento", "Adjetivo, masculino singular. Femenino: contenta, plural: contentos, contentas. Describe satisfacción."],
            ["beber", "Verbo transitivo, segunda conjugación (-er). Infinitivo: beber, participio: bebido, gerundio: bebiendo."],
            ["playa", "Sustantivo femenino, singular. Plural: playas. Orilla del mar."],
            ["jardín", "Sustantivo masculino, singular. Plural: jardines. Terreno con plantas ornamentales."],
            ["siempre", "Adverbio. Indica frecuencia o duración constante."],
            ["hombre", "Sustantivo masculino, singular. Plural: hombres. Persona de sexo masculino."],
            ["bailar", "Verbo intransitivo, primera conjugación (-ar). Infinitivo: bailar, participio: bailado, gerundio: bailando."],
            ["noche", "Sustantivo femenino, singular. Plural: noches. Período sin luz solar."],
            ["fuerte", "Adjetivo, masculino singular. Femenino: fuerte, plural: fuertes. Describe intensidad o robustez."],
            ["salir", "Verbo intransitivo, tercera conjugación (-ir). Infinitivo: salir, participio: salido, gerundio: saliendo."],
            ["puerta", "Sustantivo femenino, singular. Plural: puertas. Abertura en una pared."],
            ["libre", "Adjetivo, invariable en género, singular. Plural: libres. Describe libertad."],
            ["trabajar", "Verbo intransitivo/transitivo, primera conjugación (-ar). Infinitivo: trabajar, participio: trabajado, gerundio: trabajando."],
            ["vida", "Sustantivo femenino, singular. Plural: vidas. Estado de los seres vivos."]
        ];
// Variables de paginación
let paginaActual = 1;
const palabrasPorPagina = 20;

// Función principal para mostrar palabras
function mostrarPalabras(filtro = '') {
    const listaPalabras = document.getElementById('lista-palabras');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    listaPalabras.innerHTML = ''; // Limpia el contenido previo

    // Filtra palabras si hay texto en el buscador
    const palabrasFiltradas = filtro
        ? marcasGramaticales.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : marcasGramaticales;

    // Cálculo de paginación
    const totalPaginas = Math.ceil(palabrasFiltradas.length / palabrasPorPagina);
    const inicio = (paginaActual - 1) * palabrasPorPagina;
    const fin = inicio + palabrasPorPagina;
    const palabrasPagina = palabrasFiltradas.slice(inicio, fin);

    // Muestra mensaje si no hay resultados
    if (palabrasPagina.length === 0) {
        listaPalabras.innerHTML = '<p>No se encontraron palabras.</p>';
    } else {
        // Crea cada palabra como un botón clickeable
        palabrasPagina.forEach(([palabra]) => {
            const palabraElement = document.createElement('div');
            palabraElement.classList.add('palabra-item');
            palabraElement.textContent = palabra;
            palabraElement.setAttribute('role', 'button');
            palabraElement.setAttribute('tabindex', '0');

            // Eventos: click o Enter
            palabraElement.addEventListener('click', () => mostrarMarcas(palabra));
            palabraElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarMarcas(palabra);
            });

            listaPalabras.appendChild(palabraElement);
        });
    }

    // Actualiza el número de página y habilita/deshabilita botones
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

// Función que muestra las marcas gramaticales de la palabra seleccionada
function mostrarMarcas(palabra) {
    const marcasContenido = document.getElementById('marcas-contenido');
    const palabraData = marcasGramaticales.find(item => item[0] === palabra);
    marcasContenido.style.opacity = 0;

    // Si se encuentra la palabra
    if (palabraData) {
        marcasContenido.innerHTML = `
            <h3>${palabraData[0]}</h3>
            <p>${palabraData[1]}</p>
        `;
    } else {
        marcasContenido.innerHTML = '<p>Marcas gramaticales no encontradas.</p>';
    }

    // Animación tipo fade-in
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        marcasContenido.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);

    // Resalta la palabra seleccionada
    document.querySelectorAll('.palabra-item').forEach(item => {
        item.classList.remove('selected');
        if (item.textContent === palabra) {
            item.classList.add('selected');
        }
    });
}

// Cambiar página con los botones de navegación
function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(
        document.getElementById('buscar-palabra').value
            ? marcasGramaticales.filter(item => item[0].toLowerCase().includes(document.getElementById('buscar-palabra').value.toLowerCase())).length
            : marcasGramaticales.length
    ) / palabrasPorPagina;

    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;
    mostrarPalabras(document.getElementById('buscar-palabra').value);
}

// Escucha cambios en el input de búsqueda
document.getElementById('buscar-palabra').addEventListener('input', function() {
    paginaActual = 1; // Reinicia a la primera página
    mostrarPalabras(this.value);
});

// Carga inicial de palabras al abrir la página
mostrarPalabras();

// Muestra la fecha actual en el formato español
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;

// Desplazamiento suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
