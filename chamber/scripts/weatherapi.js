const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bogota&units=imperial&APPID=629e3b4d8e1f25635058e733470ee359'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const t = jsObject.main.temp.toFixed(1);
    document.querySelector('#current-temp').textContent = t;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windsp = jsObject.wind.speed;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#desc').textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    document.querySelector('#speed').textContent = windsp;


    if(t <= 50 && windsp > 3) {
      const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(windsp,0.16) + 0.4275 * t * Math.pow(windsp,0.16)
      document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }
  });