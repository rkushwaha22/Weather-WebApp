import React, { useEffect, useState } from 'react';
import "./WeatherMainPage.css";
import Card from '../Card/Card';
import iconw from "./icon.png";

export default function NewsApp() {
  const [search, setSearch] = useState("Delhi");
  const [data, setData] = useState(null);

  const API_KEY = "dc310f48e9d0be27a8560ee3dddf7b45";

  const getData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const jsonData = await response.json();
      if (jsonData.cod === 200) {
        setData(jsonData);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData("Delhi"); // Default load
  }, []);

  // Enter key se search karne ke liye
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') getData(search);
  };

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="logo-section">
          <img src={iconw} alt="icon" className="nav-icon" />
          <h1>SkyCast</h1>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => getData(search)}>Search</button>
        </div>
      </nav>

      <main className="content">
        <h2 className='hero-text'>Stay Updated with Current Weather Data</h2>

        {/* // Pehle wale content ko replace karen jahan buttons hain: */}
        <div className="quick-cities">
          {["Delhi", "Mumbai", "Patna", "Bengaluru", "Gorakhpur"].map((city) => (
            <button
              key={city}
              // Agar current search city is button ke barabar hai, toh 'active-btn' class lagao
              className={search === city ? "active-btn" : ""}
              onClick={() => {
                setSearch(city);
                getData(city);
              }}
            >
              {city}
            </button>
          ))}
        </div>
       
        <Card data={data} />
      </main>
    </div>
  );
}
