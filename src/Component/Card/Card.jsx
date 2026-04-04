import React from 'react'
import './Card.css'

export default function Card({ data }) {
  console.log(data);

  if (!data || data.length === 0) {
    return <div className='not-available'>Weather data not available please search your city name</div>;
  }

  const weatherInfo = data.weather && data.weather[0];

  return (

    <div className="card-container">
      <div className="card">
        <h2>City: {data.name}</h2>
        <p>Country: {data.sys.country}</p>
        <p>Temperature: {data.main.temp}°C</p>
        {/* <p>Temperature: {(data.main.temp - 273.15).toFixed(1)}°C</p> */}
        <p>Max Temp: {data.main.temp_max}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>

        {weatherInfo && (
          <>
            <p>Condition: {weatherInfo.main} ({weatherInfo.description})</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
              alt={weatherInfo.description}
            />
          </>
        )}
      </div>
    </div>

    // <div className='card-container'>

    //   {/* {

    //     data.map((v, k) => {

    //       return <div key={k} className='card'>
    //         {/* <h2>temprature : {v.main.temp}</h2><br /> */}
    //         {/* <h2>temprature : {v.main.temp_max}</h2><br />
    //         <p> city : {v.name} country: {v.sys.country}</p><br />

    //         <p> humaditidy : {v.main.humidity}</p>
    //         <p>Wind Speed: {v.wind.speed}</p> */}
    //         {v.name}

    //       </div>

    //     })
    //   } */}
    // </div>
  )
}

