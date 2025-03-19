const apiKey = "ff3063831f1e9915d3ad8b8db991eab4";
const search = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const weather = document.getElementById("weather_icon");
const result = document.getElementById("box");
const wrong = document.getElementById("error");

async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
  );
  let data = await response.json();

  if (data.name) {
    wrong.style.display = "none";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    if (data.weather[0].main == "Clouds") {
      weather.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weather.src = "/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weather.src = "/images/snow.png";
    } else if (data.weather[0].main == "Clear") {
      weather.src = "/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather.src = "/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather.src = "/images/drizzle.png";
    }

    result.style.display = "block";
  } else {
    result.style.display = "none";
    wrong.style.display = "block";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(search.value);
});
