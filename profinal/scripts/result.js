const resultDiv = document.getElementById('result');

// Obtener los valores seleccionados del formulario
const name = form.fname.value;
const email = form.email.value;
const phone = form.phone.value;
const fruit1 = form.fruit1.value;
const fruit2 = form.fruit2.value;
const fruit3 = form.fruit3.value;
const comments = form.comments.value;

// Obtener la fecha actual
const currentDate = new Date().toLocaleDateString();

// Obtener los datos de las frutas del archivo JSON
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    // Obtener los valores de carbohidratos, proteínas, grasas, azúcar y calorías para las frutas seleccionadas
    const fruitData1 = data.find(fruit => fruit.name === fruit1);
    const fruitData2 = data.find(fruit => fruit.name === fruit2);
    const fruitData3 = data.find(fruit => fruit.name === fruit3);

    const carbohydrates = fruitData1.carbohydrates + fruitData2.carbohydrates + fruitData3.carbohydrates;
    const protein = fruitData1.protein + fruitData2.protein + fruitData3.protein;
    const fat = fruitData1.fat + fruitData2.fat + fruitData3.fat;
    const calories = fruitData1.calories + fruitData2.calories + fruitData3.calories;
    const sugar = fruitData1.sugar + fruitData2.sugar + fruitData3.sugar;

    // Generar el contenido de salida formateado
    const output = `
      <h2>Order Summary</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Selected Fruits:</strong></p>
      <ul>
        <li>${fruit1}</li>
        <li>${fruit2}</li>
        <li>${fruit3}</li>
      </ul>
      <p><strong>Additional Comments/Questions:</strong> ${comments}</p>
      <p><strong>Date:</strong> ${currentDate}</p>
      <h3>Nutritional Information</h3>
      <p><strong>Total Carbohydrates:</strong> ${carbohydrates.toFixed(2)}</p>
      <p><strong>Total Protein:</strong> ${protein.toFixed(2)}</p>
      <p><strong>Total Fat:</strong> ${fat.toFixed(2)}</p>
      <p><strong>Total Calories:</strong> ${calories.toFixed(2)}</p>
      <p><strong>Total Sugar:</strong> ${sugar.toFixed(2)}</p>
    `;

    // Mostrar el resultado en la página
    resultDiv.innerHTML = output;
  })
  .catch(error => {
    console.log('Error:', error);
    resultDiv.innerHTML = '<p>An error occurred while fetching fruit data.</p>';
  });
