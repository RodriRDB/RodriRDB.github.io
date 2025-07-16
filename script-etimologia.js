// Array bidimensional con palabras y sus etimologías (tú lo defines manualmente)
const etimologias = [
            ["alcalde", "Del árabe hispánico 'alqáḍi', y este del árabe clásico 'qāḍī', que significa 'juez'. Designa a la autoridad principal de un municipio."],
            ["almohada", "Del árabe hispánico 'almuẖadda', derivado de 'ẖadda', que significa 'mejilla'. Refiere al objeto donde se apoya la cabeza al dormir."],
            ["amor", "Del latín 'amor, -ōris', relacionado con 'amāre', 'amar'. Expresa un sentimiento universal de afecto."],
            ["árbol", "Del latín 'arbor, -ōris', que significa 'árbol'. Usado para plantas leñosas de tallo único."],
            ["azúcar", "Del árabe hispánico 'assúkkar', y este del árabe clásico 'sukkar', proveniente del persa 'šakar'. Designa una sustancia dulce."],
            ["barco", "Del latín 'barca', posiblemente de origen celta. Refiere a una embarcación pequeña."],
            ["belleza", "Del latín 'bellitia', derivado de 'bellus', 'hermoso'. Describe la cualidad estética placentera."],
            ["casa", "Del latín 'casa', que significa 'cabaña' o 'choza'. Designa un lugar de vivienda."],
            ["cielo", "Del latín 'caelum', que significa 'cielo' o 'firmamento'. Se refiere al espacio visible sobre la Tierra."],
            ["comer", "Del latín 'comĕdĕre', compuesto de 'com-' (junto) y 'edĕre' (comer). Acción de ingerir alimentos."],
            ["día", "Del latín 'dies', que significa 'día'. Relacionado con el ciclo de luz solar."],
            ["escuela", "Del latín 'schola', y este del griego 'skholḗ', que significa 'ocio' o 'lugar de estudio'."],
            ["estrella", "Del latín 'stella', que significa 'estrella'. Cuerpo celeste con luz propia."],
            ["familia", "Del latín 'familia', derivado de 'famulus', 'sirviente'. Grupo de personas con lazos de parentesco."],
            ["fuego", "Del latín 'focus', que significa 'hogar' o 'fuego'. Fenómeno de combustión."],
            ["gato", "Del latín 'cattus', de origen incierto, posiblemente onomatopéyico. Mamífero doméstico."],
            ["guitarra", "Del árabe hispánico 'qīṯāra', y este del griego 'kithára', instrumento musical de cuerdas."],
            ["hombre", "Del latín 'homo, -ĭnis', que significa 'ser humano'. Usado para el género masculino."],
            ["idea", "Del latín 'idea', y este del griego 'idéa', que significa 'forma' o 'concepto'."],
            ["isla", "Del latín 'insula', que significa 'isla'. Terreno rodeado de agua."],
            ["jardín", "Del francés antiguo 'jardin', diminutivo de 'jard', del germánico 'gard', 'cercado'."],
            ["juego", "Del latín 'iocus', que significa 'broma' o 'juego'. Actividad recreativa."],
            ["libertad", "Del latín 'libertas, -ātis', derivado de 'liber', 'libre'. Capacidad de actuar sin restricciones."],
            ["libro", "Del latín 'liber, -bri', que significa 'libro' o 'corteza de árbol' (material de escritura)."],
            ["luna", "Del latín 'luna', relacionado con 'lucere', 'brillar'. Satélite natural de la Tierra."],
            ["madre", "Del latín 'mater, -tris', que significa 'madre'. Mujer que da a luz o cría."],
            ["mar", "Del latín 'mare', que significa 'mar'. Gran extensión de agua salada."],
            ["música", "Del latín 'musica', y este del griego 'mousikḗ', 'arte de las musas'."],
            ["nieve", "Del latín 'nix, nivis', que significa 'nieve'. Precipitación de agua congelada."],
            ["noche", "Del latín 'nox, noctis', que significa 'noche'. Período sin luz solar."],
            ["océano", "Del latín 'oceanus', y este del griego 'Ōkeanós', dios mitológico del agua."],
            ["ojo", "Del latín 'oculus', que significa 'ojo'. Órgano de la visión."],
            ["padre", "Del latín 'pater, -tris', que significa 'padre'. Hombre que engendra o cría."],
            ["pan", "Del latín 'panis', que significa 'pan'. Alimento básico de harina."],
            ["paz", "Del latín 'pax, pacis', que significa 'paz'. Estado de tranquilidad."],
            ["perro", "Del latín 'canis', que significa 'perro'. Mamífero doméstico."],
            ["puerta", "Del latín 'porta', que significa 'puerta'. Abertura para entrar o salir."],
            ["río", "Del latín 'rivus', que significa 'arroyo' o 'río'. Corriente de agua."],
            ["rosa", "Del latín 'rosa', que significa 'rosa'. Flor emblemática."],
            ["sol", "Del latín 'sol, solis', que significa 'sol'. Estrella del sistema solar."],
            ["sueño", "Del latín 'somnus', que significa 'sueño'. Estado de reposo."],
            ["tierra", "Del latín 'terra', que significa 'tierra' o 'suelo'. Superficie del planeta."],
            ["tiempo", "Del latín 'tempus, -ŏris', que significa 'tiempo'. Duración de eventos."],
            ["trabajo", "Del latín 'tripalium', instrumento de tortura, luego 'esfuerzo'. Actividad productiva."],
            ["vida", "Del latín 'vita', que significa 'vida'. Estado de los seres vivos."],
            ["vino", "Del latín 'vinum', que significa 'vino'. Bebida de uvas fermentadas."],
            ["zapato", "Del turco 'zapat', que significa 'calzado'. Cubre el pie hasta el tobillo."],
            ["alegría", "Del latín 'alacrĭtas', derivado de 'alacer', 'vivo' o 'alegre'. Estado de gozo."],
            ["camino", "Del latín 'caminus', de origen celta, que significa 'camino'. Vía para transitar."],
            ["ciencia", "Del latín 'scientia', derivado de 'scire', 'saber'. Conocimiento sistematizado."]
        ];
// Variables para la paginación
let paginaActual = 1;
const palabrasPorPagina = 20; // Cuántas palabras mostrar por página

// Función principal que muestra las palabras en pantalla
function mostrarPalabras(filtro = '') {
    const listaPalabras = document.getElementById('lista-palabras'); 
    const btnAnterior = document.getElementById('anterior'); 
    const btnSiguiente = document.getElementById('siguiente'); 
    const paginaActualSpan = document.getElementById('pagina-actual'); 
    listaPalabras.innerHTML = ''; 

    // Si hay filtro, aplicamos búsqueda por coincidencia
    const palabrasFiltradas = filtro
        ? etimologias.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : etimologias;

    // Calculamos la cantidad total de páginas
    const totalPaginas = Math.ceil(palabrasFiltradas.length / palabrasPorPagina);
    const inicio = (paginaActual - 1) * palabrasPorPagina;
    const fin = inicio + palabrasPorPagina;
    const palabrasPagina = palabrasFiltradas.slice(inicio, fin);

    // Si no se encuentran palabras, mostramos mensaje
    if (palabrasPagina.length === 0) {
        listaPalabras.innerHTML = '<p>No se encontraron palabras.</p>';
    } else {
        // Por cada palabra, creamos un bloque visual
        palabrasPagina.forEach(([palabra]) => {
            const palabraElement = document.createElement('div');
            palabraElement.classList.add('palabra-item');
            palabraElement.textContent = palabra;
            palabraElement.setAttribute('role', 'button');
            palabraElement.setAttribute('tabindex', '0');

            // Al hacer clic o presionar "Enter", muestra la etimología
            palabraElement.addEventListener('click', () => mostrarEtimologia(palabra));
            palabraElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarEtimologia(palabra);
            });

            listaPalabras.appendChild(palabraElement); // lo añadimos al DOM
        });
    }

    // Actualizamos el número de página en la interfaz
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

// Muestra la etimología al seleccionar una palabra
function mostrarEtimologia(palabra) {
    const etimologiaContenido = document.getElementById('etimologia-contenido');
    const palabraData = etimologias.find(item => item[0] === palabra);
    etimologiaContenido.style.opacity = 0; // para animación fade-in

    // Si encuentra la palabra, muestra su info, si no, un mensaje de error
    if (palabraData) {
        etimologiaContenido.innerHTML = `
            <h3>${palabraData[0]}</h3>
            <p>${palabraData[1]}</p>
        `;
    } else {
        etimologiaContenido.innerHTML = '<p>Etimología no encontrada.</p>';
    }

    // Animación para que aparezca poco a poco
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        etimologiaContenido.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);

    // Resaltamos visualmente la palabra seleccionada
    document.querySelectorAll('.palabra-item').forEach(item => {
        item.classList.remove('selected');
        if (item.textContent === palabra) {
            item.classList.add('selected');
        }
    });
}

// Función para cambiar de página (anterior o siguiente)
function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(
        document.getElementById('buscar-palabra').value
            ? etimologias.filter(item => item[0].toLowerCase().includes(document.getElementById('buscar-palabra').value.toLowerCase())).length
            : etimologias.length
    ) / palabrasPorPagina;

    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    mostrarPalabras(document.getElementById('buscar-palabra').value);
}

// Funcionalidad de búsqueda en tiempo real
document.getElementById('buscar-palabra').addEventListener('input', function () {
    paginaActual = 1; // Reinicia a la página 1 cuando se busca
    mostrarPalabras(this.value);
});

// Carga inicial de palabras
mostrarPalabras();

// Muestra la fecha actual en el formato español (dd/mm/aaaa)
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
})}`;

// Desplazamiento suave cuando se hace clic en enlaces con #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});