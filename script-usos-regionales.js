const usosRegionales = [
            ["aguacate", "En México y Centroamérica, fruto comestible del árbol Persea americana. En Argentina y Uruguay, se usa 'palta' para el mismo fruto."],
            ["autobús", "En España, vehículo de transporte público. En México, 'camión'; en Argentina, 'colectivo'; en Chile, 'micro'."],
            ["casa", "En España, vivienda. En México, 'casa' puede incluir el terreno; en Argentina, 'casa' se distingue de 'departamento' (apartamento)."],
            ["coche", "En España, automóvil. En México, 'carro'; en Argentina, 'auto'; en Cuba, también 'máquina'."],
            ["computadora", "En España y México, máquina para procesar datos. En Argentina, 'computadora' o 'ordenador'; en Chile, 'computador'."],
            ["dinero", "En España, moneda o riqueza. En México, 'lana' o 'feria' en contextos coloquiales; en Argentina, 'plata'."],
            ["fiesta", "En España, celebración. En México, 'pachanga' para fiestas informales; en Argentina, 'joda' en contextos coloquiales."],
            ["fresa", "En España, fruto del fresal. En México, 'fresa' describe a una persona presumida; en Colombia, 'gomelo' tiene un sentido similar."],
            ["gafas", "En España, lentes para la vista. En México, 'lentes'; en Argentina, 'anteojos'."],
            ["guapo", "En España, atractivo o valiente. En México, 'guapo' es solo atractivo; en Argentina, se prefiere 'lindo' para atractivo."],
            ["hola", "Saludo universal. En México, 'qué onda'; en Argentina, 'che' o 'hola' según contexto."],
            ["jugar", "En España, participar en un juego. En México, 'echarse un partido'; en Argentina, 'jugar un picado' para fútbol informal."],
            ["libro", "En España, obra escrita. En México, 'libro' o 'cuaderno' en contextos escolares; en Argentina, 'libro' es estándar."],
            ["luz", "En España, iluminación. En México, 'foco' para bombilla; en Argentina, 'lamparita'."],
            ["maíz", "En México, planta y grano básico. En Argentina, 'choclo'; en España, 'maíz' es más común."],
            ["mesa", "En España, mueble para comer o trabajar. En México, 'mesa' o 'tablón' en contextos rústicos; en Argentina, 'mesa' es estándar."],
            ["niño", "En España, infante. En México, 'chamaco' o 'escuintle' coloquialmente; en Argentina, 'pibe'."],
            ["papel", "En España, material para escribir. En México, 'papel' o 'papelito' para notas; en Argentina, 'papel' es estándar."],
            ["patata", "En España, tubérculo comestible. En México, 'papa'; en Argentina, también 'papa'."],
            ["pluma", "En España, instrumento de escritura. En México, 'pluma' para bolígrafo; en Argentina, 'birome' o 'lapicera'."],
            ["refrigerador", "En México, electrodoméstico para enfriar. En España, 'frigorífico'; en Argentina, 'heladera'."],
            ["silla", "En España, asiento con respaldo. En México, 'silla' o 'sillón' según tamaño; en Argentina, 'silla' es estándar."],
            ["sol", "En España, astro rey. En México, 'sol' o 'rayo' en contextos poéticos; en Argentina, 'sol' es universal."],
            ["teléfono", "En España, dispositivo de comunicación. En México, 'celular' para móvil; en Argentina, 'celular' o 'móvil'."],
            ["trabajo", "En España, actividad laboral. En México, 'chamba' coloquialmente; en Argentina, 'laburo'."],
            ["zapato", "En España, calzado. En México, 'zapato' o 'tenis' para calzado deportivo; en Argentina, 'zapato' o 'zapatillas'."],
            ["amigo", "En España, persona con lazo afectivo. En México, 'cuate' o 'compa'; en Argentina, 'amigo' o 'pibe'."],
            ["calle", "En España, vía urbana. En México, 'calle' o 'avenida'; en Argentina, 'calle' o 'cuadra'."],
            ["carne", "En España, alimento de origen animal. En México, 'carne' o 'carnita'; en Argentina, 'carne' o 'asado' en contexto."],
            ["cerveza", "En España, bebida alcohólica. En México, 'chela' o 'cerveza'; en Argentina, 'birra'."],
            ["chico", "En España, pequeño o joven. En México, 'chavo' o 'chiquillo'; en Argentina, 'pibe' o 'chico'."],
            ["comida", "En España, alimento o comida. En México, 'comida' para almuerzo; en Argentina, 'comida' o 'morfi' coloquial."],
            ["dormir", "En España, descansar durmiendo. En México, 'echarse una pestaña'; en Argentina, 'dormir una siesta'."],
            ["fiesta", "En España, celebración. En México, 'pachanga' o 'peda' para fiestas con alcohol; en Argentina, 'fiesta' o 'joda'."],
            ["fruta", "En España, producto comestible de plantas. En México, 'fruta' o 'verdura' en contextos; en Argentina, 'fruta' es estándar."],
            ["jardín", "En España, terreno con plantas ornamentales. En México, 'jardín' o 'patio'; en Argentina, 'jardín' o 'parque'."],
            ["lápiz", "En España, instrumento de escritura. En México, 'lápiz' o 'lapicero'; en Argentina, 'lápiz' o 'lapicera'."],
            ["leche", "En España, líquido producido por mamíferos. En México, 'leche' o 'lechita'; en Argentina, 'leche' es estándar."],
            ["música", "En España, arte de sonidos. En México, 'música' o 'rolas' para canciones; in Argentina, 'música' o 'musi' coloquial."],
            ["noche", "En España, período sin luz solar. En México, 'noche' o 'nochita'; in Argentina, 'noche' es estándar."],
            ["pan", "En España, alimento de harina. En México, 'pan' o 'panecito'; in Argentina, 'pan' o 'factura' para panes dulces."],
            ["parque", "En España, área verde urbana. En México, 'parque' o 'jardín'; in Argentina, 'plaza' o 'parque'."],
            ["piscina", "En España, lugar para nadar. En México, 'alberca'; in Argentina, 'pileta'."],
            ["playa", "En España, orilla del mar. En México, 'playa' o 'plaga' en slang; in Argentina, 'playa' es estándar."],
            ["sol", "En España, astro rey. En México, 'sol' o 'solecito'; in Argentina, 'sol' es universal."],
            ["taxi", "En España, vehículo de alquiler con conductor. En México, 'taxi' o 'tacsi'; in Argentina, 'taxi' o 'remís'."],
            ["tienda", "En España, establecimiento comercial. En México, 'tiendita' o 'miscelánea'; in Argentina, 'kiosco' o 'negocio'."],
            ["ventana", "En España, abertura en una pared. En México, 'ventana' o 'ventanilla'; in Argentina, 'ventana' es estándar."],
            ["viaje", "En España, desplazamiento a otro lugar. En México, 'viaje' o 'rol'; in Argentina, 'viaje' o 'paseo'."],
            ["vida", "En España, existencia de seres vivos. En México, 'vida' o 'vidita'; in Argentina, 'vida' es estándar."]
        ];
// Página actual en la paginación
let paginaActual = 1;
// Cantidad de palabras a mostrar por página
const palabrasPorPagina = 20;

//  FUNCIÓN PRINCIPAL PARA MOSTRAR LAS PALABRAS EN LA LISTA 
function mostrarPalabras(filtro = '') {
    const listaPalabras = document.getElementById('lista-palabras');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    listaPalabras.innerHTML = ''; // Limpiar contenido anterior

    // Filtrar palabras según el texto ingresado (si hay)
    const palabrasFiltradas = filtro
        ? usosRegionales.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : usosRegionales;

    // Cálculo de paginación
    const totalPaginas = Math.ceil(palabrasFiltradas.length / palabrasPorPagina);
    const inicio = (paginaActual - 1) * palabrasPorPagina;
    const fin = inicio + palabrasPorPagina;
    const palabrasPagina = palabrasFiltradas.slice(inicio, fin);

    // Mostrar las palabras de la página actual
    if (palabrasPagina.length === 0) {
        listaPalabras.innerHTML = '<p>No se encontraron palabras.</p>';
    } else {
        palabrasPagina.forEach(([palabra]) => {
            const palabraElement = document.createElement('div');
            palabraElement.classList.add('palabra-item');
            palabraElement.textContent = palabra;
            palabraElement.setAttribute('role', 'button');
            palabraElement.setAttribute('tabindex', '0');

            // Clic o Enter para mostrar el uso regional
            palabraElement.addEventListener('click', () => mostrarUsos(palabra));
            palabraElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarUsos(palabra);
            });

            listaPalabras.appendChild(palabraElement);
        });
    }

    // Actualizar botones y número de página
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

//  FUNCIÓN PARA MOSTRAR LOS USOS REGIONALES DE UNA PALABRA 
function mostrarUsos(palabra) {
    const usosContenido = document.getElementById('usos-contenido');
    const palabraData = usosRegionales.find(item => item[0] === palabra);
    usosContenido.style.opacity = 0; 

    if (palabraData) {
        usosContenido.innerHTML = `
            <h3>${palabraData[0]}</h3>
            <p>${palabraData[1]}</p>
        `;
    } else {
        usosContenido.innerHTML = '<p>Usos regionales no encontrados.</p>';
    }

    // Animación de aparición (fade-in)
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        usosContenido.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);

    // Resaltar palabra seleccionada
    document.querySelectorAll('.palabra-item').forEach(item => {
        item.classList.remove('selected');
        if (item.textContent === palabra) {
            item.classList.add('selected');
        }
    });
}

// FUNCIÓN PARA CAMBIAR DE PÁGINA 
function cambiarPagina(direccion) {
    const filtro = document.getElementById('buscar-palabra').value;
    const totalPaginas = Math.ceil(
        filtro
            ? usosRegionales.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase())).length
            : usosRegionales.length
    ) / palabrasPorPagina;

    paginaActual += direccion;

    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;

    mostrarPalabras(filtro);
}

// EVENTO PARA BUSCAR EN TIEMPO REAL 
document.getElementById('buscar-palabra').addEventListener('input', function () {
    paginaActual = 1; 
    mostrarPalabras(this.value);
});

// FECHA ACTUAL AUTOMÁTICA 
const today = new Date();
document.getElementById('fecha-actual').textContent =
    `Fecha: ${today.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })}`;

//  SCROLL SUAVE PARA ENLACES INTERNOS 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//  EJECUCIÓN INICIAL 
mostrarPalabras();