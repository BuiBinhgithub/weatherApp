import React, { useState } from "react"
import "./App.css"
import axios from "axios"

function App() {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState("")

  const apiKey = "19565bdcdcbc12f7171b5e8756216774"
  function getWeather(e) {
    if (e.key === "Enter") {
      axios
        .post(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((res) => res.data)
        .then((result) => {
          setWeather(result)
          setCity("")
        })
    }
  }

  return (
    <div className="app">
      <div className="container">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={getWeather}
        />
        {typeof weather.main != "undefined" ? (
          <div className="weather-container">
            <div className="location">
              <i className="fa-solid fa-city"></i> {weather.name},
              {weather.sys.country}
            </div>
            <div className="temp">
              <i className="fa-solid fa-temperature-high"></i>
              {Math.round(weather.main.temp_min - 273.15)}°C
            </div>
            <div className="weather">
              <i className="fa-solid fa-cloud"></i> {weather.weather[0].main}
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i> {weather.wind.speed}m/s
            </div>
            <div className="humidity">
              <i class="fa-solid fa-droplet"></i> {weather.main.humidity}%
            </div>
          </div>
        ) : (
          <div className="weather-container">
            <h1>Welcome to weather App</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
