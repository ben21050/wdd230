// Obtener referencia a los elementos select con la clase "fruits-select"
var selectElements = document.getElementsByClassName("fruits-select");

// Hacer una solicitud para obtener el JSON
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
        // Recorrer los objetos del JSON
        data.forEach(fruit => {
            // Crear una opción para cada fruta y asignar el nombre como valor y texto
            var optionElement = document.createElement("option");
            optionElement.value = fruit.name;
            optionElement.textContent = fruit.name;

            // Agregar la opción a cada elemento select con la clase "fruits-select"
            for (var i = 0; i < selectElements.length; i++) {
                selectElements[i].appendChild(optionElement.cloneNode(true));
            }
        });
    })
    .catch(error => console.log(error));