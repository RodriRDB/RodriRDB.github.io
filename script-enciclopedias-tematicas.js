 // Array bidimensional con categorías temáticas y sus descripciones
 const categoriasTematicas = [
            ["Arte", "Enciclopedias sobre pintura, escultura, arquitectura y más. Ejemplos: 'Enciclopedia del Arte' de Thames & Hudson, 'Historia del Arte' de Gombrich."],
            ["Astronomía", "Cubre planetas, estrellas, galaxias y fenómenos celestes. Ejemplos: 'Enciclopedia de Astronomía' de Cambridge, 'The Stars' de H.A. Rey."],
            ["Biología", "Explora la vida, desde microorganismos hasta ecosistemas. Ejemplos: 'Encyclopedia of Life Sciences', 'Biología' de Campbell."],
            ["Botánica", "Estudia plantas, su clasificación y usos. Ejemplos: 'Enciclopedia de Botánica' de Oxford, 'Flora Iberica'."],
            ["Ciencias de la Computación", "Aborda informática, programación y tecnología. Ejemplos: 'Encyclopedia of Computer Science', 'Introduction to Algorithms' de Cormen."],
            ["Economía", "Analiza mercados, finanzas y teorías económicas. Ejemplos: 'The New Palgrave Dictionary of Economics', 'Economía' de Samuelson."],
            ["Filosofía", "Explora corrientes filosóficas y pensadores. Ejemplos: 'Enciclopedia de Filosofía' de Stanford, 'The Oxford Companion to Philosophy'."],
            ["Física", "Cubre mecánica, termodinámica, relatividad y más. Ejemplos: 'Encyclopedia of Physics', 'Física' de Feynman."],
            ["Geografía", "Estudia regiones, climas y paisajes. Ejemplos: 'National Geographic Encyclopedia', 'Geografía Humana' de Trewartha."],
            ["Geología", "Analiza rocas, minerales y procesos terrestres. Ejemplos: 'Encyclopedia of Geology', 'Geología' de Tarbuck."],
            ["Historia", "Recopila eventos, culturas y civilizaciones. Ejemplos: 'Enciclopedia de Historia Universal' de Larousse, 'A History of the World' de Roberts."],
            ["Literatura", "Cubre obras, autores y movimientos literarios. Ejemplos: 'The Oxford Companion to Literature', 'Enciclopedia de la Literatura Española'."],
            ["Matemáticas", "Explora álgebra, geometría, cálculo y más. Ejemplos: 'Encyclopedia of Mathematics', 'Matemáticas' de Stewart."],
            ["Medicina", "Aborda anatomía, enfermedades y tratamientos. Ejemplos: 'Enciclopedia Médica' de Elsevier, 'Gray’s Anatomy'."],
            ["Música", "Estudia géneros, compositores e instrumentos. Ejemplos: 'The Grove Dictionary of Music', 'Enciclopedia de la Música Clásica'."],
            ["Química", "Cubre elementos, reacciones y compuestos. Ejemplos: 'Encyclopedia of Chemistry', 'Química' de Chang."],
            ["Religión", "Explora creencias, prácticas y tradiciones. Ejemplos: 'Encyclopedia of Religion', 'The World’s Religions' de Smith."],
            ["Sociología", "Analiza estructuras sociales y comportamientos. Ejemplos: 'Encyclopedia of Sociology', 'Sociología' de Giddens."],
            ["Tecnología", "Cubre innovaciones y avances tecnológicos. Ejemplos: 'Encyclopedia of Technology and Innovation', 'Technology Review'."],
            ["Zoología", "Estudia animales, su clasificación y hábitats. Ejemplos: 'Encyclopedia of Animals', 'Zoología' de Hickman."]
        ];
// Variables para paginación
let paginaActual = 1;
const categoriasPorPagina = 10;

// Función principal que muestra las categorías en pantalla
function mostrarCategorias(filtro = '') {
    const listaCategorias = document.getElementById('lista-categorias');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    listaCategorias.innerHTML = ''; // Limpiar contenido previo

    // Filtro por nombre si se escribe en el buscador
    const categoriasFiltradas = filtro
        ? categoriasTematicas.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : categoriasTematicas;

    // Cálculo de páginas totales y rangos de elementos a mostrar
    const totalPaginas = Math.ceil(categoriasFiltradas.length / categoriasPorPagina);
    const inicio = (paginaActual - 1) * categoriasPorPagina;
    const fin = inicio + categoriasPorPagina;
    const categoriasPagina = categoriasFiltradas.slice(inicio, fin);

    // Mostrar mensaje si no hay coincidencias
    if (categoriasPagina.length === 0) {
        listaCategorias.innerHTML = '<p>No se encontraron categorías.</p>';
    } else {
        // Por cada categoría mostrada, crear un div interactivo
        categoriasPagina.forEach(([categoria]) => {
            const categoriaElement = document.createElement('div');
            categoriaElement.classList.add('categoria-item');
            categoriaElement.textContent = categoria;
            categoriaElement.setAttribute('role', 'button');
            categoriaElement.setAttribute('tabindex', '0');

            // Click o Enter para ver detalles
            categoriaElement.addEventListener('click', () => mostrarDetalles(categoria));
            categoriaElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarDetalles(categoria);
            });

            listaCategorias.appendChild(categoriaElement);
        });
    }

    // Actualizar paginación en pantalla
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

// Función que muestra los detalles de una categoría seleccionada
function mostrarDetalles(categoria) {
    const detallesContenido = document.getElementById('detalles-contenido');
    const categoriaData = categoriasTematicas.find(item => item[0] === categoria);
    detallesContenido.style.opacity = 0;

    // Si se encuentra la categoría, mostrar su información
    if (categoriaData) {
        detallesContenido.innerHTML = `
            <h3>${categoriaData[0]}</h3>
            <p>${categoriaData[1]}</p>
        `;
    } else {
        detallesContenido.innerHTML = '<p>Detalles no encontrados.</p>';
    }

    // Animación de aparición suave (fade in)
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        detallesContenido.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);

    // Resaltar categoría seleccionada
    document.querySelectorAll('.categoria-item').forEach(item => {
        item.classList.remove('selected');
        if (item.textContent === categoria) {
            item.classList.add('selected');
        }
    });
}

// Función para cambiar de página con los botones "Anterior" y "Siguiente"
function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(
        document.getElementById('buscar-categoria').value
            ? categoriasTematicas.filter(item => item[0].toLowerCase().includes(document.getElementById('buscar-categoria').value.toLowerCase())).length
            : categoriasTematicas.length
    ) / categoriasPorPagina;

    // Cambiar el número de página
    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    // Volver a mostrar con la nueva página y filtro
    mostrarCategorias(document.getElementById('buscar-categoria').value);
}

// Evento para filtrar categorías mientras el usuario escribe
document.getElementById('buscar-categoria').addEventListener('input', function () {
    paginaActual = 1; // Reiniciar a la primera página al buscar
    mostrarCategorias(this.value);
});

// Mostrar las categorías por primera vez
mostrarCategorias();

// Mostrar la fecha actual automáticamente
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
})}`;

// Activar desplazamiento suave al hacer clic en enlaces internos (si existieran)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});