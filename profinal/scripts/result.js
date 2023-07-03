    const form = document.getElementById('fresh-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Obtener los valores del formulario
      const name = form.fname.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const fruit1 = form.fruit1.value;
      const fruit2 = form.fruit2.value;
      const fruit3 = form.fruit3.value;
      const comments = form.comments.value;

      const currentDate = new Date().toLocaleDateString();

      fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        .then(response => response.json())
        .then(data => {
          // Buscar las frutas en el archivo JSON
          const fruitData1 = data.find(fruit => fruit.name === fruit1);
          const fruitData2 = data.find(fruit => fruit.name === fruit2);
          const fruitData3 = data.find(fruit => fruit.name === fruit3);

          // Verificar si las frutas existen en el archivo JSON y tienen la propiedad "nutritions"
          if (!fruitData1?.nutritions || !fruitData2?.nutritions || !fruitData3?.nutritions) {
            resultDiv.innerHTML = '<p>One or more selected fruits are not found in the data.</p>';
            return;
          }

          // Calcular los valores nutricionales
          const carbohydrates = fruitData1.nutritions.carbohydrates + fruitData2.nutritions.carbohydrates + fruitData3.nutritions.carbohydrates;
          const protein = fruitData1.nutritions.protein + fruitData2.nutritions.protein + fruitData3.nutritions.protein;
          const fat = fruitData1.nutritions.fat + fruitData2.nutritions.fat + fruitData3.nutritions.fat;
          const calories = fruitData1.nutritions.calories + fruitData2.nutritions.calories + fruitData3.nutritions.calories;
          const sugar = fruitData1.nutritions.sugar + fruitData2.nutritions.sugar + fruitData3.nutritions.sugar;

          // Generar el contenido de salida formateado
          const output = `
            <!-- ... (resto del código) ... -->
          `;

          resultDiv.innerHTML = output;
        })
        .catch(error => {
          console.log('Error:', error);
          resultDiv.innerHTML = '<p>An error occurred while fetching fruit data.</p>';
        });
    });

