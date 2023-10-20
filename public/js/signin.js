const NuevoUsuario = document.querySelector("#formulario");

NuevoUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#nombre"); /* .value */
  const surname = document.querySelector("#apellido"); /* .value */
  const email = document.querySelector("#email"); /* .value */
  const phone_number = document.querySelector("#telefono"); /* .value */
  const password = document.querySelector("#contraseña"); /* .value */
  const confirmcontraseña =
    document.querySelector("#confirmcontraseña"); /* .value */
  const date_birth = document.querySelector("#fecha_nac"); /* .value */

  if (password.value !== confirmcontraseña.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas no coinciden",
    });
    return;
  }

  const data = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    phone_number: phone_number.value,
    password: password.value,
    date_birth: date_birth.value
  };

  fetch("/passenger/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json(); // Parse the response body as JSON
      }
      return res.json().then((data) => {
        Swal.fire({
          icon: "success",
          title: "Usuario creado",
        });
        setTimeout(() => {
          window.location.href = '/login/usuario';
        }, 2000);
      });
    })
    .then((errorData) => {
      // Handle validation errors returned by the server
      if (errorData && errorData.errors) {
        const errorMessages = errorData.errors.map((error) => error.msg);
        Swal.fire({
          icon: "error",
          title: "Error de validación",
          text: errorMessages.join('\n'),
        });
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    });
});  