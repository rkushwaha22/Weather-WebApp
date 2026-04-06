import React from 'react';
import './Card.css';
import iconw from "../WeatherPage/icon.png";

export default function Card({ data }) {
  // Debugging ke liye console check karein
  console.log("Weather Data in Card:", data);

  if (!data || !data.main || !data.weather) {
    return (
      <div className='not-available'>
        {/* Hum iconw use kar rahe hain kyunki ye hamesha available rahega */}
        <img
          src={iconw}
          style={{ width: '80px', opacity: '0.2', marginBottom: '15px', filter: 'grayscale(1)' }}
          alt="not-found"
        />
        <p>City not found or invalid name.</p>
        <span>Please check the spelling and try again.</span>
      </div>
    );
  }
  const weatherInfo = data.weather[0];

  return (
    <div className="card-container">
      <div className="weather-card">

        <div className="main-info">
          <div className="location">
            {/* City aur Country */}
            <h1>{data?.name}</h1>
            <span>{data?.sys?.country}</span>
          </div>

          <div className="temp-display">
            {/* Weather Icon */}
            {weatherInfo?.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`}
                alt={weatherInfo.description}
              />
            )}
            <div className="degree-container">
              {/* Temperature */}
              <h2 className="temp">{Math.round(data.main.temp)}°C</h2>
              <p className="condition">{weatherInfo?.main}</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <label>Max Temp</label>
            <p>{Math.round(data.main.temp_max)}°C</p>
          </div>
          <div className="stat-item">
            <label>Humidity</label>
            <p>{data.main.humidity}%</p>
          </div>
          <div className="stat-item">
            <label>Wind</label>
            <p>{data.wind.speed} m/s</p>
          </div>
          <div className="stat-item">
            <label>Description</label>
            <p style={{ fontSize: '0.9rem', textTransform: 'capitalize' }}>
              {weatherInfo?.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}









// import React from 'react'
// import './Card.css'

// export default function Card({ data }) {
//   console.log(data);

//   if (!data || data.length === 0) {
//     return <div className='not-available'>Weather data not available please search your city name</div>;
//   }

//   const weatherInfo = data.weather && data.weather[0];

//   return (

//     <div className="card-container">
//       <div className="card">
//         <h2>City: {data.name}</h2>
//         <p>Country: {data.sys.country}</p>
//         <p>Temperature: {data.main.temp}°C</p>
//         {/* <p>Temperature: {(data.main.temp - 273.15).toFixed(1)}°C</p> */}
//         <p>Max Temp: {data.main.temp_max}°C</p>
//         <p>Humidity: {data.main.humidity}%</p>
//         <p>Wind Speed: {data.wind.speed} m/s</p>

//         {weatherInfo && (
//           <>
//             <p>Condition: {weatherInfo.main} ({weatherInfo.description})</p>
//             <img
//               src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
//               alt={weatherInfo.description}
//             />
//           </>
//         )}
//       </div>
//     </div>

//   )
// }

