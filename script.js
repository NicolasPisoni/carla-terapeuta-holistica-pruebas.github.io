document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    // Encuentra solo la tarjeta actual
    const card = this.closest('.card');
    const extraText = card.querySelector('.extra-text');

    // Cambiar clase para animación suave
    extraText.classList.toggle('visible');

    // Toggle individual
    if (extraText.style.display === "none" || extraText.style.display === "") {
      extraText.style.display = "block";
      this.textContent = "LEER MENOS";
    } else {
      extraText.style.display = "none";
      this.textContent = "LEER MÁS";
    }
  });
  // ANIMACIONES AL SCROLLEAR (INTERSECTION OBSERVER)
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
  }, 
  {
    threshold: 0.00001 // Cambia este valor según la sensibilidad que desees
  });

  // Elementos a animar
  document.querySelectorAll('.card, .section, .hero-content').forEach(el => {
  observer.observe(el);
  });
});