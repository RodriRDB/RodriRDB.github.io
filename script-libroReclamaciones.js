// Objeto bidimensional con departamentos, provincias y distritos
const regiones = {
  "Lima": {
    "Lima": ["Miraflores", "San Isidro", "Surco", "Comas"],
    "Callao": ["Bellavista", "La Perla", "Ventanilla"]
  },
  "Arequipa": {
    "Arequipa": ["Cercado", "Yanahuara", "Cayma", "Sachaca"],
    "Camana": ["Camana", "Ocoña"]
  }
};

// Referencias a los <select> del formulario
const selDepartamento = document.getElementById("departamento");
const selProvincia = document.getElementById("provincia");
const selDistrito = document.getElementById("distrito");

// Cargar departamentos al iniciar el documento
window.addEventListener("DOMContentLoaded", () => {
  selDepartamento.innerHTML = '<option value="">Seleccione</option>';
  for (let dep in regiones) {
    selDepartamento.innerHTML += `<option value="${dep}">${dep}</option>`;
  }
});

// Al seleccionar un departamento, se cargan sus provincias
selDepartamento.addEventListener("change", () => {
  const provs = regiones[selDepartamento.value];
  selProvincia.innerHTML = '<option value="">Seleccione</option>';
  selDistrito.innerHTML = '<option value="">Seleccione</option>';
  for (let prov in provs) {
    selProvincia.innerHTML += `<option value="${prov}">${prov}</option>`;
  }
});

// Al seleccionar una provincia, se cargan sus distritos
selProvincia.addEventListener("change", () => {
  const dist = regiones[selDepartamento.value][selProvincia.value];
  selDistrito.innerHTML = '<option value="">Seleccione</option>';
  dist.forEach(d => {
    selDistrito.innerHTML += `<option value="${d}">${d}</option>`;
  });
});

// Al cargar el documento, se configura el envío del formulario
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.form-reclamacion');

  // Intercepta el envío del formulario
  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita recargar la página

    // Pregunta de confirmación
    const confirmacion = confirm("¿Deseas enviar tu reclamo?");
    if (!confirmacion) {
      alert("Envio cancelado.");
      return;
    }

    // Solicita calificación del servicio mediante prompt
    let calificacion = prompt("¿Cómo calificarías nuestro servicio? (1 a 5)");

    // Validación: el usuario debe ingresar un número válido entre 1 y 5
    while (!calificacion || isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
      calificacion = prompt("Por favor, ingresa un número válido del 1 al 5:");
    }

    calificacion = parseInt(calificacion); 

    // Muestra mensaje personalizado según la calificación
    let mensaje = "";
    switch (calificacion) {
      case 1:
        mensaje = "Lamentamos mucho tu experiencia. Trabajaremos en mejorar.";
        break;
      case 2:
        mensaje = "Sentimos que no cumplimos tus expectativas. Gracias por tu opinión.";
        break;
      case 3:
        mensaje = "Gracias. Seguiremos mejorando.";
        break;
      case 4:
        mensaje = "¡Nos alegra que estés satisfecho!";
        break;
      case 5:
        mensaje = "¡Gracias por tu excelente calificación!";
        break;
      default:
        mensaje = "Gracias por participar.";
    }

    alert(mensaje); // Muestra mensaje final

    // Si existe un mensaje previo, lo elimina
    const mensajeAnterior = document.getElementById('mensaje-confirmacion');
    if (mensajeAnterior) mensajeAnterior.remove();

    // Crea un nuevo mensaje debajo del formulario
    const resumen = document.createElement('div');
    resumen.id = 'mensaje-confirmacion';
    resumen.classList.add('mensaje-confirmacion');
    resumen.innerHTML = `
      <p><strong>Tu reclamo ha sido registrado correctamente.</strong></p>
      <p>Calificación del servicio: <strong>${calificacion}/5</strong></p>
    `;

    // Estilos del resumen
    resumen.style.marginTop = "20px";
    resumen.style.padding = "15px";
    resumen.style.backgroundColor = "#f0f8ff";
    resumen.style.border = "1px solid #ccc";

    // Inserta el resumen después del formulario
    formulario.after(resumen);
  });
});
