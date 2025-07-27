import { useState } from "react";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");

  function getWeatherImage(weatherType) {
    const weatherImages = {
      Clear: '/weather_icons/unnamed.png',
      Clouds: '/weather_icons/clouds.jpg',
      Rain: '/weather_icons/rain.png',
      Snow: '/weather_icons/image(1).png',
      Thunderstorm: '/weather_icons/thunder.png',
      Drizzle: '/weather_icons/images.png',
      Default: '/weather_icons/default.png'
    };
    return weatherImages[weatherType] || weatherImages.Default;
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function weatherResult() {
axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d71299b25a28f92d7febc15967aef437`)

      .then((success) => {
        const weatherMain = success.data.weather[0].main;
        console.log("Weather Type:", weatherMain); // Debug
        setWeather(weatherMain);
        setTemperature((success.data.main.temp - 273.15).toFixed(1)); // Kelvin to Celsius
        setWind(success.data.wind.speed);
      })
      .catch((failure) => {
        console.log(failure);
        alert("City not found. Please try again.");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-purple-800 to-pink-300 text-white p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl px-2 w-64 text-center border-[5px] border-black shadow-lg shadow-purple-500">
        <div className="flex justify-end">
          <div className="bg-black py-2 w-16 ml-20 mx-auto rounded-b-lg mb-4"></div>
          <i className="fa-solid fa-signal text-white ml-2"></i>
          <i className="fa-solid fa-wifi text-white ml-2"></i>
        </div>

        <div className="p-1">
          <input
            value={city}
            onChange={handleCity}
            className="text-purple-800 rounded-lg p-1 mt-5 w-40 focus:outline-none"
            placeholder="Search"
          />
          <button onClick={weatherResult} className="bg-white/20 p-1 rounded-lg ml-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <img src={getWeatherImage(weather)} alt={weather} className="w-32 h-32 mx-auto mt-4" />

        <div className="p-10">
          <h2 className="text-2xl font-bold">{city}</h2>
          <p className="text-lg mt-2">
            <i className="fa-solid fa-cloud text-white text-xl ml-2"></i> {weather}
          </p>
          <p className="text-sm">
            <i className="fa-solid fa-temperature-half text-red-500 text-xl ml-2"></i> {temperature} °C
          </p>
          <h1 className="text-white">
            <i className="fa-solid fa-wind text-white ml-2"></i> {wind}
          </h1>
        </div>

        <div className="w-20 h-2 bg-white/30 rounded-full mx-auto mt-10"></div>
      </div>
    </div>
  );
}

export default Weather;