const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "d8b5f202afcbd2c2ddc5d15a3721a910";

const inputBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");
const weatherIcon = document.querySelector(".report #weather-icon");

async function chechkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  // const response = await fetch(`${url}${city}&appid=${apiKey}`);
  // const response = await fetch(url +`&appid = ${apiKey}`)
  var data = await response.json();
  console.log(data);

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = data.main.temp + " °C";
  document.querySelector("#desc").innerHTML = data.weather[0].description;
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#pressure").innerHTML = data.main.pressure + "mb";
  document.querySelector("#w-speed").innerHTML = data.wind.speed + "km/h";
  

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
  } else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
  }else if(data.weather[0].main == "Humidity"){
    weatherIcon.src = "images/humidity.png"
  }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
  }else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png"
  }else if(data.weather[0].main == "Wind"){
    weatherIcon.src = "images/wind.png"
  }
}

searchBtn.addEventListener("click", () => {
  chechkWeather(inputBox.value);
  console.log("Button was clicked")
});
