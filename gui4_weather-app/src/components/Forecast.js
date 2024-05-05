import React from 'react'

// Takes in props: weather object received as response from API and a datebuilder method


const Forecast = ({weather, dateBuilder}) => {
  const icon =weather ? "http://openweathermap.org/img/wn/"+ weather.weather[0].icon+"@4x.png": ""
  return (
    <div>
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°C
        <div class="hi-lo">
          <p>High: {weather.main.temp_max}</p>
          <p>Low: {weather.main.temp_min}</p>
          <p>Feels Like: {weather.main.feels_like}</p>

          </div></div>
        <div className="weather">{weather.weather[0].main}</div>
        <div className="humidity">
          <p>Humidity: {weather.main.humidity}% </p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <div class="icon"><p><img src={icon} alt=""/></p></div>
          </div>

      </div>
    </div>
  )
}

export default Forecast
