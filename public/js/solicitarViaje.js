const solicitudForm = document.querySelector('#solicitudForm');

solicitudForm.addEventListener('submit', enviarDatos);
async function enviarDatos(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
  
    // Obtén los valores del formulario
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    // const origen_lat = parseFloat(document.getElementById('origen_lat').innerText);
    // const origen_lng = parseFloat(document.getElementById('origen_lng').innerText);
  
    // Crea un objeto con los datos
    const datos = {
      origen,
      destino,
    };
     // Utiliza las coordenadas obtenidas del mapa
  // const origen_lat = parseFloat(origen_lat);
  // const origen_lng = parseFloat(origen_lng);

  
    try {
      // Realiza una solicitud POST a la ruta de registro de viaje
      const respuesta = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
  
      // Verifica la respuesta
      if (respuesta.ok) {
        const data = await respuesta.json();
        alert('Viaje registrado correctamente:', data);
      } else {
        console.error('Error al registrar el viaje:', respuesta.statusText);
        alert('Hubo un error al registrar el viaje. Consulta la consola para más detalles.');
      }
    } catch (error) {
      console.error('Error al registrar el viaje:', error);
      alert('Hubo un error al registrar el viaje. Consulta la consola para más detalles.');
    }
  }
  
  // Asocia la función al evento click del botón
 