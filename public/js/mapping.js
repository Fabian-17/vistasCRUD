const map = L.map('map').setView([-26.1869, -58.1756], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e) {
  const { lat, lng } = e.latlng;
  console.log('Latitud:', lat);
  console.log('Longitud:', lng);
  // Aquí se puede almacenar lat y lng en variables para enviar al servidor

// Actualizar los elementos del formulario con las coordenadas del origen
document.getElementById('origen_lat').innerHTML = lat;
document.getElementById('origen_lng').innerHTML = lng;
});