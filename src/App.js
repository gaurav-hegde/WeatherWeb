import "./App.css";
import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState();

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57e0a6a54f6431376683113d52e0d172&units=metric`
    )
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setWeather(data))
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="app flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-[4rem] pl-5">Weather Web</h1>
      <div>
        <form onSubmit={handleSubmit} className="p-5">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-md p-2 bg-white bg-opacity-50 w-[23rem]"
          />
          <button
            type="submit"
            className="rounded-md p-2 ml-2 bg-white bg-opacity-50"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        {weather && (
          <div className="card bg-white bg-opacity-25 flex flex-col items-center justify-center w-[28rem] h-[30rem] rounded-xl">
            <h2 className="text-6xl text-white font-bold pb-10">
              {weather.name}
            </h2>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="weather-icon"
              className="h-[8rem]"
            />
            <p className="text-white text-2xl">
              Humidity: {weather.main.humidity}
            </p>
            <h2 className="text-white text-2xl">
              Temperature: {weather.main.temp}
            </h2>
            <h2 className="text-white text-2xl">
              Feels Like: {weather.main.feels_like}
            </h2>
            <p className="text-white text-2xl">{weather.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
}
