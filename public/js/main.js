let swiper = new Swiper('.swiper-container', {
    slidesPerView:  getSlidesPerView(),
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function getSlidesPerView() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      return 3; 
    } else if (windowWidth >= 578) {
      return 2;
    } else {
      return 1; 
    }
  }


  
  window.addEventListener('resize', function() {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });
  

  document.getElementById('cerrar-sesion-btn').addEventListener('click', () => {
    // Elimina el token del Local Storage
    localStorage.removeItem('token');
    
    // Redirige al usuario a la página de inicio de sesión u otra página deseada
    window.location.href = '/login'; // Cambia '/login' a la URL que corresponda
  });
  