// Diccionario de palabras y definiciones 
const diccionario = [
            ["abrir", "Separar o apartar lo que está unido o cerrado."],
            ["acceso", "Entrada o posibilidad de entrar a un lugar o sistema."],
            ["alma", "Principio vital o espiritual de los seres vivos."],
            ["amor", "Sentimiento intenso de afecto o atracción hacia algo o alguien."],
            ["árbol", "Planta perenne de tallo leñoso que se ramifica a cierta altura."],
            ["arte", "Actividad creativa que produce obras de valor estético."],
            ["abanico", "Objeto plegable usado para mover aire y refrescarse."],  
            ["abrazo", "Gesto de cariño en el que se rodea a alguien con los brazos."],  
            ["abuelo", "Padre de uno de los padres de una persona."],  
            ["acantilado", "Pendiente o precipicio alto en la costa."],  
            ["aceite", "Líquido graso usado en cocina o industria."],  
            ["acero", "Aleación resistente de hierro y carbono."],  
            ["actriz", "Mujer que interpreta papeles en obras teatrales o películas."],  
            ["adulto", "Persona que ha alcanzado la madurez."],  
            ["afán", "Esfuerzo o deseo intenso por lograr algo."],  
            ["agua", "Líquido transparente e incoloro esencial para la vida."],  
            ["ahorro", "Guardar dinero o recursos para el futuro."],  
            ["aire", "Mezcla de gases que forma la atmósfera terrestre."],  
            ["ajedrez", "Juego de estrategia entre dos jugadores con piezas sobre un tablero."],  
            ["alba", "Momento del día en que comienza a salir el sol."],  
            ["alegría", "Sentimiento de felicidad intensa."],  
            ["alfabeto", "Conjunto ordenado de letras de un idioma."],  
            ["algoritmo", "Serie de pasos lógicos para resolver un problema."],  
            ["almohada", "Objeto mullido para apoyar la cabeza al dormir."],  
            ["altar", "Lugar elevado donde se realizan ofrendas o ritos."],  
            ["amanecer", "Inicio del día con la salida del sol."],  
            ["ancla", "Objeto pesado que sujeta un barco al fondo del mar."],  
            ["anillo", "Pieza redonda de metal que se lleva en el dedo."],  
            ["ansiedad", "Estado de inquietud o nerviosismo."],  
            ["antorcha", "Vara con fuego en un extremo para iluminar."],  
            ["anuncio", "Mensaje público para promocionar algo."],  
            ["apagón", "Interrupción temporal del suministro eléctrico."],  
            ["apio", "Planta comestible de tallo verde y crujiente."],  
            ["araña", "Arácnido de ocho patas que teje telarañas."],  
            ["arcoíris", "Fenómeno óptico con bandas de colores en el cielo."],  
            ["arena", "Partículas pequeñas de roca en playas o desiertos."],  
            ["argolla", "Aro de metal usado como adorno o símbolo."],  
            ["armario", "Mueble para guardar ropa u otros objetos."],  
            ["aroma", "Olor agradable que desprende algo."],  
            ["arpa", "Instrumento musical de cuerdas pulsadas."],  
            ["asado", "Carne cocinada al fuego o parrilla."],  
            ["ascensor", "Dispositivo mecánico para subir o bajar pisos."],  
            ["asiento", "Mueble diseñado para sentarse."],  
            ["astronauta", "Persona que viaja al espacio."],  
            ["ataúd", "Caja donde se deposita un cadáver."],  
            ["atlas", "Colección de mapas geográficos."],  
            ["atún", "Pez marino grande usado en alimentación."],  
            ["aurora", "Resplandor en el cielo antes del amanecer."],  
            ["auto", "Vehículo automotor para transporte personal."],  
            ["avance", "Progreso o mejora en un proceso."],  
            ["ave", "Animal vertebrado con plumas y alas."],  
            ["avión", "Vehículo aéreo más pesado que el aire."],  
            ["ayuda", "Asistencia o apoyo a alguien."],  
            ["azúcar", "Sustancia dulce derivada de plantas."],  
            ["azul", "Color del cielo despejado o el mar."],  
            ["ángel", "Ser espiritual mensajero de lo divino."],  
            ["baila", "Moverse rítmicamente al son de la música."],
            ["belleza", "Cualidad de lo que produce placer estético."],
            ["boca", "Abertura del cuerpo humano por donde se ingieren alimentos."],
            ["brisa", "Viento suave y ligero."],
            ["babel", "Confusión o desorden causado por muchas voces o idiomas."],  
            ["babero", "Prenda que cubre el pecho de un bebé para evitar manchas."],  
            ["babor", "Lado izquierdo de una embarcación mirando hacia proa."],  
            ["bacalao", "Pez marino usado como alimento, típico en cocina salada."],  
            ["badén", "Depresión en el terreno o camino que dificulta el paso."],  
            ["bagaje", "Equipaje o conjunto de conocimientos y experiencias."],  
            ["bailable", "Música o evento donde se puede bailar."],  
            ["bajel", "Barco o embarcación, especialmente antiguo."],  
            ["bajío", "Zona marina poco profunda peligrosa para la navegación."],  
            ["balada", "Canción narrativa de tono sentimental o melancólico."],  
            ["balde", "Recipiente para líquidos, generalmente con asa."],  
            ["bambú", "Planta de tallo leñoso y hueco, usada en construcción."],  
            ["banal", "Algo trivial o carente de originalidad."],  
            ["bandín", "Pequeña banda elástica usada para sujetar objetos."],  
            ["banquete", "Comida abundante y festiva con muchos invitados."],  
            ["baobab", "Árbol africano de tronco grueso y copa pequeña."],  
            ["baranda", "Barandilla o pasamanos para apoyarse o protegerse."],  
            ["barba", "Pelo que crece en el mentón y mejillas del hombre."],  
            ["barca", "Embarcación pequeña, a menudo sin cubierta."],  
            ["barro", "Mezcla de tierra y agua, usada en alfarería."],  
            ["basalto", "Roca volcánica de color oscuro y gran dureza."],  
            ["bastón", "Vara usada como apoyo al caminar o como símbolo."],  
            ["batata", "Tubérculo dulce similar a la papa, de origen americano."],  
            ["batir", "Mezclar o golpear ingredientes hasta integrarlos."],  
            ["bautizo", "Ceremonia religiosa de iniciación cristiana."],  
            ["bazar", "Tienda donde se venden objetos variados."],  
            ["beatitud", "Estado de felicidad plena o bendición divina."],  
            ["bebé", "Niño recién nacido o de muy corta edad."],  
            ["befa", "Burla o mofa dirigida a alguien."],  
            ["beige", "Color marrón claro o crema."],  
            ["belén", "Representación del nacimiento de Jesús con figuras."],  
            ["bencina", "Combustible derivado del petróleo para motores."],  
            ["berro", "Planta acuática comestible de sabor picante."],  
            ["beso", "Contacto con los labios como muestra de afecto."],  
            ["bicho", "Insecto o animal pequeño, a veces despectivo."],  
            ["bienal", "Evento que ocurre cada dos años."],  
            ["bigote", "Pelo que crece sobre el labio superior."],  
            ["bilis", "Líquido digestivo producido por el hígado."],  
            ["biombo", "Mueble plegable usado como separador de ambientes."],  
            ["bisagra", "Herraje que permite el movimiento de puertas o ventanas."],  
            ["bisturí", "Cuchillo pequeño y afilado usado en cirugía."],  
            ["blanco", "Color puro que refleja toda la luz; objetivo a alcanzar."],  
            ["bloque", "Objeto sólido y compacto; grupo unido por intereses."],  
            ["boa", "Serpiente constrictora no venenosa de gran tamaño."],  
            ["bobina", "Cilindro con cable enrollado, usado en electricidad."],  
            ["bóer", "Poblador de origen neerlandés en Sudáfrica."],  
            ["boga", "Acción de remar; época de popularidad de algo."],  
            ["bolero", "Género musical y baile originario de Cuba."],  
            ["bólido", "Meteoro muy brillante; automóvil extremadamente rápido."],  
            ["bonzo", "Monje budista en países como Japón o China."],  
            ["cabeza", "Parte superior del cuerpo humano que contiene el cerebro."],
            ["calle", "Vía pública entre edificios en una población."],
            ["cama", "Mueble destinado a dormir o descansar."],
            ["campo", "Terreno extenso fuera de poblaciones."],
            ["canto", "Acción de emitir sonidos melódicos con la voz."],
            ["casa", "Edificio destinado a vivienda."],
            ["cielo", "Espacio visible sobre la Tierra donde se ven los astros."],
            ["ciudad", "Conjunto de edificios y calles habitados por una población."],
            ["comer", "Ingerir alimentos para nutrirse."],
            ["corazón", "Órgano muscular que impulsa la sangre en el cuerpo."],
            ["día", "Tiempo que tarda la Tierra en dar una vuelta sobre sí misma."],
            ["dolor", "Sensación de sufrimiento físico o emocional."],
            ["escuela", "Institución destinada a la enseñanza."],
            ["estrella", "Cuerpo celeste que brilla con luz propia."],
            ["familia", "Grupo de personas unidas por lazos de parentesco."],
            ["feliz", "Que experimenta alegría o satisfacción."],
            ["fuego", "Fenómeno de combustión que produce calor y luz."],
            ["flor", "Parte de la planta que contiene los órganos reproductivos."],
            ["fruta", "Producto comestible de ciertas plantas, generalmente dulce."],
            ["gato", "Mamífero carnívoro doméstico de la familia de los felinos."],
            ["guitarra", "Instrumento musical de cuerdas que se toca pulsándolas."],
            ["hermano", "Persona que comparte los mismos padres que otra."],
            ["historia", "Narración de hechos pasados, reales o ficticios."],
            ["hogar", "Lugar donde vive una familia o persona."],
            ["hombre", "Ser humano de sexo masculino."],
            ["idea", "Representación mental de algo, real o imaginario."],
            ["isla", "Tierra rodeada de agua por todos lados."],
            ["jardín", "Terreno donde se cultivan plantas ornamentales."],
            ["juego", "Actividad recreativa con reglas para divertirse."],
            ["juventud", "Etapa de la vida entre la infancia y la madurez."],
            ["lago", "Masa de agua rodeada de tierra."],
            ["libertad", "Capacidad de actuar según la propia voluntad."],
            ["libro", "Conjunto de hojas impresas encuadernadas."],
            ["luna", "Satélite natural de la Tierra."],
            ["luz", "Radiación que permite la visión."],
            ["madre", "Mujer que ha dado a luz o criado a un hijo."],
            ["mar", "Gran extensión de agua salada."],
            ["música", "Arte de combinar sonidos de manera agradable."],
            ["nieve", "Precipitación de agua en forma de cristales de hielo."],
            ["noche", "Período del día sin luz solar."],
            ["nube", "Masa de vapor de agua suspendida en la atmósfera."],
            ["océano", "Gran extensión de agua salada que cubre la Tierra."],
            ["ojo", "Órgano de la visión en los seres humanos."],
            ["padre", "Hombre que ha engendrado o criado a un hijo."],
            ["pan", "Alimento hecho de harina, agua y levadura."],
            ["paz", "Estado de tranquilidad y ausencia de conflicto."],
            ["perro", "Mamífero carnívoro doméstico de la familia de los cánidos."],
            ["piedra", "Material sólido y duro de origen mineral."],
            ["puerta", "Abertura en una pared para entrar o salir."],
            ["río", "Corriente natural de agua que fluye por un cauce."],
            ["rosa", "Flor del rosal, símbolo de belleza y amor."],
            ["sangre", "Líquido rojo que circula por las venas y arterias."],
            ["sol", "Estrella que ilumina y calienta la Tierra."],
            ["sueño", "Estado de reposo en que se pierde la consciencia."],
            ["tierra", "Superficie sólida del planeta o suelo."],
            ["tiempo", "Duración de los acontecimientos o fenómenos."],
            ["trabajo", "Actividad física o mental para lograr un resultado."],
            ["tren", "Vehículo que circula sobre raíles."],
            ["universidad", "Institución de educación superior."],
            ["viento", "Movimiento del aire en la atmósfera."],
            ["vida", "Estado de actividad de los seres vivos."],
            ["vino", "Bebida alcohólica hecha de uvas fermentadas."],
            ["zapato", "Calzado que cubre el pie hasta el tobillo."],
            ["alegría", "Sentimiento de gozo o felicidad."],
            ["camino", "Vía o sendero para transitar."],
            ["ciencia", "Conjunto de conocimientos sistematizados."],
            ["color", "Sensación producida por la luz en el ojo."],
            ["desierto", "Región árida con poca vegetación."],
            ["estrecho", "Paso angosto entre dos tierras."],
            ["fuerza", "Capacidad para mover o sostener algo."],
            ["gloria", "Honra o prestigio alcanzado por méritos."],
            ["humo", "Gases y partículas producidas por combustión."],
            ["invierno", "Estación del año más fría."],
            ["lago", "Masa de agua rodeada de tierra."],
            ["magia", "Arte de producir efectos extraordinarios."],
            ["nacimiento", "Acto de nacer o principio de algo."],
            ["oro", "Metal precioso de color amarillo brillante."],
            ["pintura", "Arte de representar con colores sobre una superficie."],
            ["poema", "Composición literaria en verso."],
            ["silencio", "Ausencia de sonido o ruido."],
            ["sombra", "Zona oscura producida por un cuerpo que bloquea la luz."],
            ["torre", "Edificio alto y estrecho."],
            ["valle", "Depresión entre montañas o colinas."],
            ["volcán", "Montaña con abertura por donde salen lava y gases."],
            ["yate", "Embarcación de recreo."],
            ["zoológico", "Lugar donde se exhiben animales para el público."]
        ];
// Variables para control de paginación
let paginaActual = 1;
const palabrasPorPagina = 20;

// === Mostrar palabras según la página y filtro ===
function mostrarPalabras(filtro = '') {
    const listaPalabras = document.getElementById('lista-palabras');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const paginaActualSpan = document.getElementById('pagina-actual');
    listaPalabras.innerHTML = '';

    // Filtrar por texto ingresado
    const palabrasFiltradas = filtro
        ? diccionario.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
        : diccionario;

    // Calcular páginas
    const totalPaginas = Math.ceil(palabrasFiltradas.length / palabrasPorPagina);
    const inicio = (paginaActual - 1) * palabrasPorPagina;
    const fin = inicio + palabrasPorPagina;
    const palabrasPagina = palabrasFiltradas.slice(inicio, fin);

    // Mostrar resultados o mensaje vacío
    if (palabrasPagina.length === 0) {
        listaPalabras.innerHTML = '<p>No se encontraron palabras.</p>';
    } else {
        palabrasPagina.forEach(([palabra]) => {
            const palabraElement = document.createElement('div');
            palabraElement.classList.add('palabra-item');
            palabraElement.textContent = palabra;
            palabraElement.setAttribute('role', 'button');
            palabraElement.setAttribute('tabindex', '0');
            palabraElement.addEventListener('click', () => mostrarDefinicion(palabra));
            palabraElement.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') mostrarDefinicion(palabra);
            });
            listaPalabras.appendChild(palabraElement);
        });
    }

    // Actualizar controles de paginación
    paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
}

//  Cambiar página (anterior/siguiente) 
function cambiarPagina(direccion) {
    const filtro = document.getElementById('buscar-palabra').value;
    const totalPaginas = Math.ceil(
        filtro ? diccionario.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase())).length : diccionario.length
    ) / palabrasPorPagina;

    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;
    mostrarPalabras(filtro);
}

//  Mostrar definición seleccionada 
function mostrarDefinicion(palabra) {
    const definicionContenido = document.getElementById('definicion-contenido');
    const palabraData = diccionario.find(item => item[0] === palabra);

    // Animación de desvanecimiento
    definicionContenido.style.opacity = 0;

    // Mostrar contenido o mensaje de error
    if (palabraData) {
        definicionContenido.innerHTML = `
            <h3>${palabraData[0]}</h3>
            <p>${palabraData[1]}</p>
        `;
    } else {
        definicionContenido.innerHTML = '<p>Definición no encontrada.</p>';
    }

    // Efecto visual de aparición (fade in)
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        definicionContenido.style.opacity = opacity;
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

// Funcionalidad de búsqueda en tiempo real 
document.getElementById('buscar-palabra').addEventListener('input', function() {
    paginaActual = 1; // Reiniciar a la primera página
    mostrarPalabras(this.value);
});

//  Mostrar palabras al cargar la página 
mostrarPalabras();

//  Mostrar la fecha actual 
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;

// Desplazamiento suave al hacer clic en enlaces internos (si existen) 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
