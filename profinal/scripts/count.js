        // Obtener referencia al formulario
        const form = document.getElementById('fresh-form');

        // Obtener referencia al contador de bebidas especiales
        const countSpan = document.getElementById('special-drinks-count');

        // Variable para almacenar el contador localmente
        let specialDrinksCount = 0;

        // Escuchar el evento de envío del formulario
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Incrementar el contador de bebidas especiales
            specialDrinksCount++;

            // Actualizar el texto del contador en la página
            countSpan.textContent = specialDrinksCount;
        });


