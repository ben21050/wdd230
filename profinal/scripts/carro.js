// Obtener los elementos del carrusel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Obtener las diapositivas del carrusel
const slides = carousel.querySelectorAll('.slide');
const totalSlides = slides.length;

// Establecer el índice inicial en 0
let currentIndex = 0;

// Función para mostrar la diapositiva actual
const showSlide = (index) => {
  // Verificar el índice válido
  if (index >= 0 && index < totalSlides) {
    // Ocultar todas las diapositivas
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Mostrar la diapositiva actual
    slides[index].style.display = 'block';
  }
};

// Mostrar la primera diapositiva al cargar la página
showSlide(currentIndex);

// Función para mostrar la siguiente diapositiva
const nextSlide = () => {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
};

// Función para mostrar la diapositiva anterior
const prevSlide = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  showSlide(currentIndex);
};

// Agregar eventos de clic a los botones de flecha
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
