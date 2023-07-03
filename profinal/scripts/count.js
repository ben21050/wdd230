// Obtener referencia al formulario
const form = document.getElementById('fresh-form');

// Obtener referencia al contador de bebidas especiales
const countSpan = document.getElementById('special-drinks-count');

// Verificar si hay datos almacenados localmente y actualizar el contador
let specialDrinksCount = localStorage.getItem('specialDrinksCount') || 0;
countSpan.textContent = specialDrinksCount;

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Incrementar el contador de bebidas especiales
    specialDrinksCount++;
    
    // Guardar el contador en el almacenamiento local
    localStorage.setItem('specialDrinksCount', specialDrinksCount);

    // Actualizar el texto del contador en la página
    countSpan.textContent = specialDrinksCount;

    // Enviar el formulario
    form.submit();
});
