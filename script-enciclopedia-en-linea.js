// Array bidimensional con las plataformas de enciclopedias en línea y sus descripciones (con enlaces)
 const plataformasEnLinea = [
            ["Wikipedia", "Plataforma colaborativa de conocimiento libre, disponible en múltiples idiomas. Ofrece artículos editados por la comunidad en una amplia gama de temas. Acceso gratuito. <br><a href='https://es.wikipedia.org/wiki/Wikipedia:Portada' target='_blank' class='enlace-plataforma'>Visitar Wikipedia</a>"],
            ["Encyclopædia Britannica", "Enciclopedia de prestigio con contenido revisado por expertos. Incluye artículos detallados y recursos multimedia. Acceso gratuito limitado; suscripción para contenido premium. <br><a href='https://www.britannica.com/' target='_blank' class='enlace-plataforma'>Visitar Britannica</a>"],
            ["Khan Academy", "Plataforma educativa con recursos enciclopédicos sobre matemáticas, ciencias y más. Ofrece tutoriales y ejercicios interactivos. Acceso gratuito. <br><a href='https://www.khanacademy.org/' target='_blank' class='enlace-plataforma'>Visitar Khan Academy</a>"],
            ["Stanford Encyclopedia of Philosophy", "Enciclopedia especializada en filosofía, con artículos académicos escritos por expertos. Ideal para investigadores. Acceso gratuito. <br><a href='https://plato.stanford.edu/' target='_blank' class='enlace-plataforma'>Visitar SEP</a>"],
            ["Wolfram Alpha", "Motor de conocimiento computacional que responde preguntas con datos estructurados. Cubre matemáticas, ciencias y más. Acceso gratuito limitado; suscripción para funciones avanzadas. <br><a href='https://www.wolframalpha.com/' target='_blank' class='enlace-plataforma'>Visitar Wolfram Alpha</a>"],
            ["Encyclopedia.com", "Ofrece acceso a artículos de múltiples enciclopedias y diccionarios. Cubre temas generales y especializados. Acceso gratuito. <br><a href='https://www.encyclopedia.com/' target='_blank' class='enlace-plataforma'>Visitar Encyclopedia.com</a>"],
            ["New World Encyclopedia", "Enciclopedia en línea con enfoque en valores humanos y conocimiento universal. Contenido revisado por editores. Acceso gratuito. <br><a href='https://www.newworldencyclopedia.org/' target='_blank' class='enlace-plataforma'>Visitar New World Encyclopedia</a>"],
            ["Scholarpedia", "Enciclopedia académica con artículos revisados por pares en ciencias y matemáticas. Acceso gratuito. <br><a href='http://www.scholarpedia.org/' target='_blank' class='enlace-plataforma'>Visitar Scholarpedia</a>"],
            ["Citizendium", "Enciclopedia colaborativa con artículos verificados por expertos. Menos extensa que Wikipedia, pero con mayor control editorial. Acceso gratuito. <br><a href='http://en.citizendium.org/' target='_blank' class='enlace-plataforma'>Visitar Citizendium</a>"],
            ["The Canadian Encyclopedia", "Enfocada en historia, cultura y ciencia de Canadá, con artículos en inglés y francés. Acceso gratuito. <br><a href='https://www.thecanadianencyclopedia.ca/' target='_blank' class='enlace-plataforma'>Visitar The Canadian Encyclopedia</a>"]
        ];


// Variables para el control de paginación
let paginaActual = 1;                  
const plataformasPorPagina = 10;        

// Función que muestra las plataformas en la lista, opcionalmente filtradas por texto
function mostrarPlataformas(filtro = '') {
    const listaPlataformas = document.getElementById('lista-plataformas');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    listaPlataformas.innerHTML = ''; // Limpiar lista actual

    // Filtrar plataformas si se escribe algo en el buscador
    const plataformasFiltradas = filtro
        ? plataformasEnLinea.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : plataformasEnLinea;

    // Calcular el total de páginas necesarias
    const totalPaginas = Math.ceil(plataformasFiltradas.length / plataformasPorPagina);
    const inicio = (paginaActual - 1) * plataformasPorPagina;
    const fin = inicio + plataformasPorPagina;

    // Obtener las plataformas que deben mostrarse en esta página
    const plataformasPagina = plataformasFiltradas.slice(inicio, fin);

    // Si no hay resultados, mostrar mensaje
    if (plataformasPagina.length === 0) {
        listaPlataformas.innerHTML = '<p>No se encontraron plataformas.</p>';
    } else {
        // Recorrer y mostrar cada plataforma
        plataformasPagina.forEach(([plataforma]) => {
            const plataformaElement = document.createElement('div');
            plataformaElement.classList.add('plataforma-item');
            plataformaElement.textContent = plataforma;
            plataformaElement.setAttribute('role', 'button');
            plataformaElement.setAttribute('tabindex', '0');

            // Eventos para mostrar detalles al hacer clic o presionar Enter
            plataformaElement.addEventListener('click', () => mostrarDetalles(plataforma));
            plataformaElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarDetalles(plataforma);
            });

            listaPlataformas.appendChild(plataformaElement);
        });
    }

    // Actualizar texto y botones de paginación
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

// Función que muestra los detalles de una plataforma seleccionada
function mostrarDetalles(plataforma) {
    const detallesContenido = document.getElementById('detalles-contenido');
    const plataformaData = plataformasEnLinea.find(item => item[0] === plataforma);
    detallesContenido.style.opacity = 0; // Preparar animación de opacidad

    // Si se encuentra la plataforma, mostrar los detalles con formato
    if (plataformaData) {
        detallesContenido.innerHTML = `<h3>${plataformaData[0]}</h3><p>${plataformaData[1]}</p>`;
    } else {
        detallesContenido.innerHTML = '<p>Detalles no encontrados.</p>';
    }

    // Animación de aparición suave (fade-in)
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        detallesContenido.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);

    // Remarcar visualmente la plataforma seleccionada
    document.querySelectorAll('.plataforma-item').forEach(item => {
        item.classList.remove('selected');
        if (item.textContent === plataforma) {
            item.classList.add('selected');
        }
    });
}

// Función para cambiar la página actual (siguiente o anterior)
function cambiarPagina(direccion) {
    const filtro = document.getElementById('buscar-plataforma').value;

    const totalPaginas = Math.ceil(
        filtro
            ? plataformasEnLinea.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase())).length
            : plataformasEnLinea.length
    ) / plataformasPorPagina;

    // Cambiar página asegurándose de que no se salga del rango
    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    mostrarPlataformas(filtro);
}

// Evento que se ejecuta cuando el documento HTML está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    mostrarPlataformas(); // Mostrar lista inicial

    // Evento para filtrar mientras se escribe
    document.getElementById('buscar-plataforma').addEventListener('input', function () {
        paginaActual = 1; // Siempre reinicia en página 1 cuando se busca
        mostrarPlataformas(this.value);
    });

    // Mostrar la fecha actual automáticamente
    const today = new Date();
    document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })}`;

    // Activar scroll suave al hacer clic en anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
