// Array bidimensional con datos de enciclopedias ilustradas: [título, descripción, imagen, enlace]
const enciclopediasIlustradas = [
            [
                "Enciclopedia Infantil Larousse",
                "Una enciclopedia diseñada para niños, con ilustraciones coloridas que explican temas desde animales hasta historia. Ideal para aprendizaje temprano. Editorial: Larousse.",
                "Imagenes/enciclopedia_infantil.jpg",
                "https://www.larousse.es/"
            ],
            [
                "National Geographic Visual Encyclopedia",
                "Explora el mundo con imágenes vibrantes de naturaleza, cultura y ciencia. Perfecta para estudiantes visuales. Editorial: National Geographic.",
                "Imagenes/natgeo_visual.jpg",
                "https://www.nationalgeographic.com/"
            ],
            [
                "DK Children’s Illustrated Encyclopedia",
                "Enciclopedia ilustrada con diagramas y fotos que cubren temas generales. Ideal para niños y familias. Editorial: DK Publishing.",
                "Imagenes/dk_illustrated.jpg",
                "https://www.dk.com/"
            ],
            [
                "The Ultimate Dinosaur Encyclopedia",
                "Enfocada en dinosaurios, con ilustraciones detalladas y datos científicos actualizados. Ideal para jóvenes paleontólogos. Editorial: Scholastic.",
                "Imagenes/dinosaur_encyclopedia.jpg",
                "https://www.scholastic.com/"
            ],
            [
                "Enciclopedia Ilustrada de la Ciencia",
                "Cubre física, química y biología con diagramas y gráficos atractivos. Perfecta para estudiantes de secundaria. Editorial: SM.",
                "Imagenes/ciencia_ilustrada.jpg",
                "https://www.gruposm.com/"
            ],
            [
                "The Art Book by Phaidon",
                "Enciclopedia de arte con imágenes de obras maestras y explicaciones accesibles. Ideal para amantes del arte. Editorial: Phaidon.",
                "Imagenes/art_book.jpg",
                "https://www.phaidon.com/"
            ],
            [
                "Enciclopedia de Animales Ilustrada",
                "Explora la vida animal con ilustraciones detalladas y datos sobre hábitats y comportamientos. Editorial: Anaya.",
                "Imagenes/animales_ilustrada.jpg",
                "https://www.anaya.es/"
            ],
            [
                "Visual History of the World",
                "Una enciclopedia histórica con mapas, fotos y cronologías ilustradas. Perfecta para estudiantes de historia. Editorial: National Geographic.",
                "Imagenes/visual_history.jpg",
                "https://www.nationalgeographic.com/"
            ]
        ];
// Función que genera dinámicamente las tarjetas en el grid
function mostrarEnciclopedias() {
    const grid = document.getElementById('ilustradas-grid');
    grid.innerHTML = ''; // Limpiar contenido anterior si lo hay

    // Recorremos el array y creamos cada tarjeta
    enciclopediasIlustradas.forEach(([titulo, descripcion, imagen, enlace]) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `
            <img src="${imagen}" alt="${titulo}" class="grid-imagen">
            <div class="grid-contenido">
                <h3>${titulo}</h3>
                <p>${descripcion.split('. ')[0] + '.'}</p>
            </div>
            <div class="grid-overlay">
                <p>${descripcion}</p>
                <a href="${enlace}" target="_blank" class="enlace-plataforma">Visitar</a>
            </div>
        `;
        // Accesibilidad: permite abrir modal con click o Enter
        gridItem.setAttribute('role', 'button');
        gridItem.setAttribute('tabindex', '0');
        gridItem.addEventListener('click', () => abrirModal(titulo, descripcion, imagen, enlace));
        gridItem.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') abrirModal(titulo, descripcion, imagen, enlace);
        });
        grid.appendChild(gridItem);
    });
}

// Función para abrir el modal con los datos de la enciclopedia seleccionada
function abrirModal(titulo, descripcion, imagen, enlace) {
    const modal = document.getElementById('modal');
    const modalImagen = document.getElementById('modal-imagen');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalEnlace = document.getElementById('modal-enlace');

    // Llenar los elementos del modal
    modalImagen.src = imagen;
    modalImagen.alt = titulo;
    modalTitulo.textContent = titulo;
    modalDescripcion.innerHTML = descripcion;
    modalEnlace.href = enlace;
    modalEnlace.textContent = `Visitar ${titulo.split(' ')[0]}`;

    // Mostrar el modal
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');

    // Enfocar el botón cerrar (accesibilidad)
    document.querySelector('.modal-cerrar').focus();
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Escuchar tecla ESC para cerrar modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});

// Al cargar la página, mostrar enciclopedias automáticamente
mostrarEnciclopedias();

// Mostrar la fecha actual en formato dd/mm/yyyy
const today = new Date();
document.getElementById('fecha-actual').textContent = `Fecha: ${today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;

// Efecto de desplazamiento suave para anclas internas (si hubiera)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
