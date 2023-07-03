    const form = document.getElementById('fresh-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

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
          const fruitData1 = data.find(fruit => fruit.name === fruit1);
          const fruitData2 = data.find(fruit => fruit.name === fruit2);
          const fruitData3 = data.find(fruit => fruit.name === fruit3);

          const carbohydrates = fruitData1.nutritions.carbohydrates + fruitData2.nutritions.carbohydrates + fruitData3.nutritions.carbohydrates;
          const protein = fruitData1.nutritions.protein + fruitData2.nutritions.protein + fruitData3.nutritions.protein;
          const fat = fruitData1.nutritions.fat + fruitData2.nutritions.fat + fruitData3.nutritions.fat;
          const calories = fruitData1.nutritions.calories + fruitData2.nutritions.calories + fruitData3.nutritions.calories;
          const sugar = fruitData1.nutritions.sugar + fruitData2.nutritions.sugar + fruitData3.nutritions.sugar;

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
            <p><strong>Total Carbohydrates:</strong> ${carbohydrates}</p>
            <p><strong>Total Protein:</strong> ${protein}</p>
            <p><strong>Total Fat:</strong> ${fat}</p>
            <p><strong>Total Calories:</strong> ${calories}</p>
            <p><strong>Total Sugar:</strong> ${sugar}</p>
          `;

          resultDiv.innerHTML = output;
        })
        .catch(error => {
          console.log('Error:', error);
          resultDiv.innerHTML = '<p>An error occurred while fetching fruit data.</p>';
        });
    });
