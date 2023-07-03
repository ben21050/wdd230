const form = document.getElementById('fresh-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = form.fname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const fruits = Array.from(form.querySelectorAll('.fruits-select')).map(select => select.value);
    const comments = form.comments.value;

    const currentDate = new Date().toLocaleDateString();

    let totalCarbs = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalSugar = 0;
    let totalCalories = 0;

    fruits.forEach(fruit => {
        const fruitData = fruitJSON.find(item => item.name === fruit);
        if (fruitData) {
            totalCarbs += fruitData.carbs;
            totalProteins += fruitData.proteins;
            totalFats += fruitData.fats;
            totalSugar += fruitData.sugar;
            totalCalories += fruitData.calories;
        }
    });

    const resultHTML = `
        <h2>Detalles del Pedido</h2>
        <p>Nombre: ${fname}</p>
        <p>Correo Electrónico: ${email}</p>
        <p>Teléfono: ${phone}</p>
        <p>Frutas Seleccionadas: ${fruits.join(', ')}</p>
        <p>Instrucciones Especiales: ${comments}</p>
        <h2>Fecha del Pedido</h2>
        <p>${currentDate}</p>
        <h2>Totales</h2>
        <p>Carbohidratos Totales: ${totalCarbs}g</p>
        <p>Proteínas Totales: ${totalProteins}g</p>
        <p>Grasas Totales: ${totalFats}g</p>
        <p>Azúcar Total: ${totalSugar}g</p>
        <p>Calorías Totales: ${totalCalories}kcal</p>
    `;

    resultDiv.innerHTML = resultHTML;
});

// Carga el archivo JSON al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        .then(response => response.json())
        .then(data => {
            // Asigna el JSON a la variable fruitJSON
            fruitJSON = data;

            // Crea las opciones de selección de frutas en el formulario
            const fruitSelects = Array.from(form.querySelectorAll('.fruits-select'));
            fruitSelects.forEach(select => {
                data.forEach(fruit => {
                    const option = document.createElement('option');
                    option.value = fruit.name;
                    option.textContent = fruit.name;
                    select.appendChild(option);
                });
            });
        })
        .catch(error => console.log(error));
});
