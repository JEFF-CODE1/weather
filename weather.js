
const apiKey = "675204ee8015e0b00f89d2d54a0c9990";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();

      // Update weather info
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
      }

      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").innerText = "Network error. Please try again.";
  }
}


checkWeather("London");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


document.querySelectorAll("#cities .city").forEach(cityDiv => {
  cityDiv.addEventListener("click", () => {
    checkWeather(cityDiv.dataset.city);
  });
});
=======
const apiKey = "675204ee8015e0b00f89d2d54a0c9990";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();

      // Update weather info
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png";
      }

      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").innerText = "Network error. Please try again.";
  }
}


checkWeather("London");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


document.querySelectorAll("#cities .city").forEach(cityDiv => {
  cityDiv.addEventListener("click", () => {
    checkWeather(cityDiv.dataset.city);
  });
});
>>>>>>> 79878b286676f59410b21e7277d39ba37c7f62c6
