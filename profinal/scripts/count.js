// Obtén una referencia al formulario y al contador en la página de inicio
const form = document.getElementById('fresh-form');
const drinkCountSpan = document.getElementById('drink-count');

// Verifica si ya existe un valor almacenado para el contador
let drinkCount = localStorage.getItem('drinkCount');
if (!drinkCount) {
  // Si no hay un valor almacenado, inicializa el contador en 0
  drinkCount = 0;
} else {
  // Si hay un valor almacenado, actualiza el contenido del contador en la página de inicio
  drinkCountSpan.textContent = drinkCount;
}

// Agrega un controlador de eventos para el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Incrementa el contador de bebidas
  drinkCount++;
  
  // Almacena el nuevo valor del contador en el almacenamiento local del navegador
  localStorage.setItem('drinkCount', drinkCount);

  // Actualiza el contenido del contador en la página de inicio y en la página de formulario
  drinkCountSpan.textContent = drinkCount;
  document.getElementById('drink-count-form').textContent = drinkCount;
  
  // Restablece los valores del formulario
  form.reset();
});
