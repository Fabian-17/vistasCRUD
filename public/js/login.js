const formLogin = document.querySelector('#formulario');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#contraseña').value;

    const response = await fetch('/passenger/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error en la autenticación'); // Opcional: personaliza el mensaje de error
        }
        return res.json();
    })
    .then(data => {
        // Almacena el token en el Local Storage
        localStorage.setItem('token', data.token);

        // Redirige a la página de 'menu' después de 2 segundos
        setTimeout(() => {
            window.location.href = '/menu';
        }, 2000);
    })
    .catch(err => {
        console.error(err);
        // Puedes mostrar un mensaje de error aquí usando SweetAlert o similar
        Swal.fire('Error', err.message, 'error');
    });
});
