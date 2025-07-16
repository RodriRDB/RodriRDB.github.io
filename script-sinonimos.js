 const sinonimosAnt = [
            ["alegre", "Sinónimos: contento, feliz, jovial. Antónimos: triste, melancólico, apesadumbrado."],
            ["amar", "Sinónimos: querer, adorar, enamorar. Antónimos: odiar, detestar, aborrecer."],
            ["bello", "Sinónimos: hermoso, bonito, lindo. Antónimos: feo, desagradable, horrible."],
            ["brillante", "Sinónimos: reluciente, luminoso, resplandeciente. Antónimos: opaco, apagado, mate."],
            ["caliente", "Sinónimos: ardiente, cálido, abrasador. Antónimos: frío, helado, fresco."],
            ["casa", "Sinónimos: hogar, vivienda, morada. Antónimos: calle, exterior, aire libre."],
            ["claro", "Sinónimos: evidente, obvio, nítido. Antónimos: oscuro, confuso, borroso."],
            ["comer", "Sinónimos: ingerir, alimentarse, consumir. Antónimos: ayunar, abstenerse."],
            ["corto", "Sinónimos: breve, reducido, pequeño. Antónimos: largo, extenso, prolongado."],
            ["día", "Sinónimos: jornada, amanecer, luz. Antónimos: noche, oscuridad, anochecer."],
            ["dulce", "Sinónimos: azucarado, suave, meloso. Antónimos: amargo, ácido, salado."],
            ["fácil", "Sinónimos: sencillo, simple, asequible. Antónimos: difícil, complicado, arduo."],
            ["feliz", "Sinónimos: alegre, contento, dichoso. Antónimos: triste, infeliz, apesadumbrado."],
            ["fuerte", "Sinónimos: robusto, sólido, resistente. Antónimos: débil, frágil, endeble."],
            ["gordo", "Sinónimos: obeso, corpulento, grueso. Antónimos: flaco, delgado, esbelto."],
            ["grande", "Sinónimos: amplio, extenso, vasto. Antónimos: pequeño, reducido, diminuto."],
            ["hermoso", "Sinónimos: bello, bonito, atractivo. Antónimos: feo, desagradable, horrendo."],
            ["inteligente", "Sinónimos: listo, astuto, brillante. Antónimos: estúpido, torpe, ignorante."],
            ["joven", "Sinónimos: juvenil, adolescente, mozo. Antónimos: viejo, anciano, mayor."],
            ["lento", "Sinónimos: pausado, tranquilo, moroso. Antónimos: rápido, veloz, ágil."],
            ["libre", "Sinónimos: independiente, suelto, autónomo. Antónimos: esclavo, preso, atado."],
            ["limpio", "Sinónimos: pulcro, aseado, impecable. Antónimos: sucio, manchado, descuidado."],
            ["luz", "Sinónimos: claridad, brillo, iluminación. Antónimos: oscuridad, sombra, penumbra."],
            ["nuevo", "Sinónimos: reciente, moderno, novedoso. Antónimos: viejo, antiguo, usado."],
            ["oscuro", "Sinónimos: sombrío, tenebroso, apagado. Antónimos: claro, luminoso, brillante."],
            ["rápido", "Sinónimos: veloz, ágil, pronto. Antónimos: lento, pausado, moroso."],
            ["rico", "Sinónimos: adinerado, opulento, acaudalado. Antónimos: pobre, necesitado, humilde."],
            ["silencio", "Sinónimos: quietud, calma, mutismo. Antónimos: ruido, bullicio, alboroto."],
            ["sol", "Sinónimos: astro, estrella, luz solar. Antónimos: luna, sombra, oscuridad."],
            ["triste", "Sinónimos: apesadumbrado, melancólico, afligido. Antónimos: alegre, feliz, contento."],
            ["alto", "Sinónimos: elevado, prominente, alto. Antónimos: bajo, pequeño, corto."],
            ["amigo", "Sinónimos: compañero, camarada, colega. Antónimos: enemigo, adversario, rival."],
            ["blanco", "Sinónimos: claro, níveo, albo. Antónimos: negro, oscuro, sucio."],
            ["calma", "Sinónimos: tranquilidad, paz, serenidad. Antónimos: agitación, tormenta, caos."],
            ["cerrar", "Sinónimos: clausurar, bloquear, tapar. Antónimos: abrir, destapar, liberar."],
            ["difícil", "Sinónimos: arduo, complicado, laborioso. Antónimos: fácil, sencillo, simple."],
            ["frío", "Sinónimos: helado, gélido, fresco. Antónimos: caliente, cálido, ardiente."],
            ["lejos", "Sinónimos: distante, remoto, apartado. Antónimos: cerca, próximo, contiguo."],
            ["largo", "Sinónimos: extenso, prolongado, largo. Antónimos: corto, breve, reducido."],
            ["pequeño", "Sinónimos: chico, diminuto, reducido. Antónimos: grande, extenso, amplio."],
            ["risa", "Sinónimos: carcajada, alegría, regocijo. Antónimos: llanto, tristeza, pena."],
            ["subir", "Sinónimos: ascender, trepar, elevarse. Antónimos: bajar, descender, caer."],
            ["viejo", "Sinónimos: anciano, mayor, antiguo. Antónimos: joven, nuevo, reciente."],
            ["abrir", "Sinónimos: destapar, desbloquear, liberar. Antónimos: cerrar, bloquear, tapar."],
            ["bajo", "Sinónimos: pequeño, corto, reducido. Antónimos: alto, elevado, grande."],
            ["contento", "Sinónimos: alegre, feliz, satisfecho. Antónimos: triste, descontento, apesadumbrado."],
            ["fácilmente", "Sinónimos: sencillamente, con facilidad, ágilmente. Antónimos: dificultosamente, con esfuerzo."],
            ["fuerte", "Sinónimos: intenso, vigoroso, potente. Antónimos: débil, suave, tenue."],
            ["luminoso", "Sinónimos: brillante, claro, resplandeciente. Antónimos: oscuro, apagado, sombrío."],
            ["tranquilo", "Sinónimos: sereno, calmado, pacífico. Antónimos: inquieto, agitado, nervioso."]
        ];

    // Variables de paginación
    let paginaActual = 1;
    const palabrasPorPagina = 20;

    // Función principal para mostrar palabras filtradas y paginadas
    function mostrarPalabras(filtro = '') {
        const listaPalabras = document.getElementById('lista-palabras');
        const btnAnterior = document.getElementById('anterior');
        const btnSiguiente = document.getElementById('siguiente');
        const paginaActualSpan = document.getElementById('pagina-actual');
        listaPalabras.innerHTML = '';

        // Filtrar las palabras según búsqueda
        const palabrasFiltradas = filtro
            ? sinonimosAnt.filter(item => item[0].toLowerCase().includes(filtro.toLowerCase()))
            : sinonimosAnt;

        // Calcular paginación
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
                palabraElement.addEventListener('click', () => mostrarSinonimos(palabra));
                palabraElement.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') mostrarSinonimos(palabra);
                });
                listaPalabras.appendChild(palabraElement);
            });
        }

        // Actualizar controles de paginación
        paginaActualSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
        btnAnterior.disabled = paginaActual === 1;
        btnSiguiente.disabled = paginaActual === totalPaginas || totalPaginas === 0;
    }

    // Función para mostrar sinónimos y antónimos al hacer clic
    function mostrarSinonimos(palabra) {
        const sinonimosContenido = document.getElementById('sinonimos-contenido');
        const palabraData = sinonimosAnt.find(item => item[0] === palabra);
        sinonimosContenido.style.opacity = 0;

        // Mostrar contenido si se encuentra la palabra
        if (palabraData) {
            sinonimosContenido.innerHTML = `
                <h3>${palabraData[0]}</h3>
                <p>${palabraData[1]}</p>
            `;
        } else {
            sinonimosContenido.innerHTML = '<p>Sinónimos y antónimos no encontrados.</p>';
        }

        // Animación de desvanecimiento (fade-in)
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            sinonimosContenido.style.opacity = opacity;
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

    // Cambiar página con dirección (+1 o -1)
    function cambiarPagina(direccion) {
        const totalPaginas = Math.ceil(
            document.getElementById('buscar-palabra').value
                ? sinonimosAnt.filter(item => item[0].toLowerCase().includes(document.getElementById('buscar-palabra').value.toLowerCase())).length
                : sinonimosAnt.length
        ) / palabrasPorPagina;

        paginaActual += direccion;
        if (paginaActual < 1) paginaActual = 1;
        if (paginaActual > totalPaginas) paginaActual = totalPaginas;
        mostrarPalabras(document.getElementById('buscar-palabra').value);
    }

    // Evento al escribir en el buscador
    document.getElementById('buscar-palabra').addEventListener('input', function () {
        paginaActual = 1; // Reinicia a la primera página
        mostrarPalabras(this.value);
    });

    // === JUEGO DE SINÓNIMOS Y ANTÓNIMOS ===

    let palabraActualJuego = "";
    let puntaje = 0;

    // Seleccionar palabra aleatoria y mostrar pregunta
    function nuevaPalabraJuego() {
        const indiceAleatorio = Math.floor(Math.random() * sinonimosAnt.length);
        palabraActualJuego = sinonimosAnt[indiceAleatorio][0];
        document.getElementById("palabra-juego").textContent = `¿Cuál es un ${obtenerModo()} de: "${palabraActualJuego}"?`;
        document.getElementById("respuesta-juego").value = "";
        document.getElementById("resultado-juego").textContent = "";
    }

    // Obtener modo del juego (sinónimo o antónimo)
    function obtenerModo() {
        const modo = document.getElementById("modo-juego").value;
        return modo === "antonimo" ? "antónimo" : "sinónimo";
    }

    // Verificar si la respuesta del usuario es correcta
    function verificarJuego() {
        const modo = document.getElementById("modo-juego").value;
        const respuesta = limpiarTexto(document.getElementById("respuesta-juego").value);
        const palabraData = sinonimosAnt.find(p => p[0] === palabraActualJuego);

        if (!palabraData) {
            document.getElementById("resultado-juego").textContent = "Error al obtener datos.";
            return;
        }

        // Separar sinónimos y antónimos
        const partes = palabraData[1].split("Antónimos:");
        const listaSinonimos = partes[0].replace("Sinónimos:", "").split(",").map(s => limpiarTexto(s));
        const listaAntonimos = partes[1]?.split(",").map(a => limpiarTexto(a)) || [];

        let correcto = false;

        // Comparar con lista correspondiente
        if (modo === "sinonimo") {
            correcto = listaSinonimos.includes(respuesta);
        } else {
            correcto = listaAntonimos.includes(respuesta);
        }

        // Mostrar resultado y actualizar puntaje
        if (correcto) {
            document.getElementById("resultado-juego").textContent = `¡Correcto! Es un ${modo}.`;
            puntaje++;
        } else {
            document.getElementById("resultado-juego").textContent = `Incorrecto. Intenta con otro ${modo}.`;
        }

        document.getElementById("puntaje-juego").textContent = puntaje;
    }

    // Función para limpiar la respuesta ingresada
    function limpiarTexto(texto) {
        return texto.trim().toLowerCase().replace(/[^\wáéíóúñü]/gi, "");
    }

    // Cargar la primera palabra del juego automáticamente
    nuevaPalabraJuego();

    // Mostrar la fecha actual en el elemento con id "fecha-actual"
    const today = new Date();
    document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;

    // Scroll suave para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });