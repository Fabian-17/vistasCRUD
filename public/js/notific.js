// Archivo app.js

// Simulación de notificaciones
const notificaciones = [
    { id: 1, usuario: "Usuario 1", origen: "Av. 25 Mayo", destino: "Supermercado Caceres", aceptado: false },
    { id: 2, usuario: "Usuario 2", origen: "Juan Domingo Perón", destino: "HMC", aceptado: true },
    { id: 3, usuario: "Usuario 3", origen: "Tu casa", destino: "Su casa", aceptado: false }
];

const notificacionesDiv = document.getElementById("notificaciones");
const notificacionBtn = document.getElementById("notificacionBtn");
let notificacionesVisible = false;

// Función para mostrar u ocultar notificaciones
function toggleNotificaciones() {
    if (notificacionesVisible) {
        notificacionesDiv.style.display = "none";
    } else {
        notificacionesDiv.style.display = "block";
        mostrarNotificaciones();
    }
    notificacionesVisible = !notificacionesVisible;
}

// Función para mostrar notificaciones
function mostrarNotificaciones() {
    notificacionesDiv.innerHTML = ""; // Limpiar notificaciones anteriores

    notificaciones.forEach(notificacion => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        
        // Establecer el borde verde o rojo según si ha sido aceptado
        if (notificacion.aceptado) {
            card.classList.add("border-danger"); // Borde rojo si ha sido aceptado
        } else {
            card.classList.add("border-success"); // Borde verde si no ha sido aceptado
        }

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = `Nuevo viaje de ${notificacion.usuario}`;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = `Origen: ${notificacion.origen}<br>Destino: ${notificacion.destino}`;

        const aceptarBtn = document.createElement("button");
        aceptarBtn.classList.add("btn", "btn-success", "mx-2");
        aceptarBtn.textContent = "Aceptar";

        const rechazarBtn = document.createElement("button");
        rechazarBtn.classList.add("btn", "btn-danger");
        rechazarBtn.textContent = "Rechazar";

        // Agregar eventos para aceptar y rechazar
        aceptarBtn.addEventListener("click", () => aceptarCliente(notificacion));
        rechazarBtn.addEventListener("click", () => rechazarCliente(notificacion));

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(aceptarBtn);
        cardBody.appendChild(rechazarBtn);
        card.appendChild(cardBody);

        notificacionesDiv.appendChild(card);
    });
}

// Función para aceptar un cliente
function aceptarCliente(notificacion) {
    // Aquí puedes realizar las acciones necesarias cuando se acepta un cliente
    // Por ejemplo, eliminar la notificación, asignar un chofer, etc.
    alert(`Cliente ${notificacion.usuario} aceptado`);
    eliminarNotificacion(notificacion);
}

// Función para rechazar un cliente
function rechazarCliente(notificacion) {
    // Aquí puedes realizar las acciones necesarias cuando se rechaza un cliente
    // Por ejemplo, eliminar la notificación, enviar una respuesta, etc.
    alert(`Cliente ${notificacion.usuario} rechazado`);
    eliminarNotificacion(notificacion);
}

// Función para eliminar una notificación
function eliminarNotificacion(notificacion) {
    const index = notificaciones.indexOf(notificacion);
    if (index !== -1) {
        notificaciones.splice(index, 1);
        mostrarNotificaciones(); // Actualizar la lista de notificaciones
    }
}

// Alternar visibilidad de notificaciones al hacer clic en el botón
notificacionBtn.addEventListener("click", toggleNotificaciones);
