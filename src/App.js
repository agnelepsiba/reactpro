import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const staticWeatherData = [
    {
      name: 'Chennai',
      main: {
        temp: 30,
      },
      weather: [
        {
          description: 'cloudy',
        },
      ],
    },
    {
      name: 'Madurai',
      main: {
        temp: 35,
      },
      weather: [
        {
          description: 'hot',
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityData = staticWeatherData.find(
      (data) => data.name.toLowerCase() === city.toLowerCase()
    );
    if (cityData) {
      setWeather(cityData);
      setError(null);
    } else {
      setWeather(null);
      setError('No data available');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
