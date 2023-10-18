const NuevoUsuario = document.querySelector("#formulario");

NuevoUsuario.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#nombre')/* .value */;
  const surname = document.querySelector('#apellido')/* .value */;
  const email = document.querySelector('#email')/* .value */;
  const phone_number = document.querySelector('#telefono')/* .value */;
  const password = document.querySelector('#contraseña')/* .value */;
  const confirmcontraseña = document.querySelector('#confirmcontraseña')/* .value */;
  const date_birth = document.querySelector('#fecha_nac')/* .value */;

  if (password.value !== confirmcontraseña.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden',
    });
    return;
  }

  try {

    console.log(JSON.stringify({
      name: name.value,
        surname: surname.value,
        email: email.value,
        phone_number: phone_number.value,
        password: password.value,
        date_birth: date_birth.value
    }));

    const response = fetch('http://locahost:3000/passenger/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        surname: surname.value,
        email: email.value,
        phone_number: phone_number.value,
        password: password.value,
        date_birth: date_birth.value,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))

    // if (!response.ok) {
    //   throw new Error('Error en la solicitud');
    // }

    const respToJson = response/* await response.json(); */

    // console.log(respToJson);

    Swal.fire({
      icon: 'success',
      title: 'Usuario creado',
      text: respToJson.message,
    });

    console.log(respToJson.message);

    NuevoUsuario.reset();

    /* setTimeout(() => {
      window.location.href = '/login/usuario';
    }, 2000); */
  } catch (error) {
    console.error(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
});
