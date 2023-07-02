        // Verificar si existe un contador de bebidas especiales en el almacenamiento local
        if (localStorage.getItem('specialDrinksCount')) {
            // Obtener el valor actual del contador y actualizar la tarjeta de información
            var count = parseInt(localStorage.getItem('specialDrinksCount'));
            document.getElementById('special-drinks-count').textContent = count;
        } else {
            // Si no existe un contador, inicializarlo a 0
            localStorage.setItem('specialDrinksCount', '0');
        }

        // Escuchar el evento de envío del formulario y actualizar el contador de bebidas especiales
        document.getElementById('fresh-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Incrementar el contador de bebidas especiales
            var count = parseInt(localStorage.getItem('specialDrinksCount'));
            count++;
            localStorage.setItem('specialDrinksCount', count.toString());

            // Actualizar la tarjeta de información
            document.getElementById('special-drinks-count').textContent = count;
        });





