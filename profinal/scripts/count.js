// Obtener el elemento del contador
const drinkCountForm = document.getElementById('drink-count-form');

// Obtener el valor actual del contador almacenado en localStorage
let count = localStorage.getItem('drinkCount');

// Si el contador no existe en localStorage, inicializarlo a 0
if (!count) {
  count = 0;
}

// Mostrar el contador en la página
drinkCountForm.textContent = count;

// Escuchar el evento de envío del formulario
const form = document.getElementById('fresh-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Incrementar el contador
  count++;
  
  // Actualizar el valor del contador en localStorage
  localStorage.setItem('drinkCount', count);

  // Mostrar el contador actualizado en la página
  drinkCountForm.textContent = count;
});
