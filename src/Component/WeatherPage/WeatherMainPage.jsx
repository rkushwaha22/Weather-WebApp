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



// import React, { useEffect, useState } from 'react';
// import "./NewsApp.css";
// import Card from '../Card/Card';
// import iconw from "./icon.png";

// export default function NewsApp() {
//   const [search, setSearch] = useState("Delhi");
//   const [data, setData] = useState(null);

//   const API_KEY = "dc310f48e9d0be27a8560ee3dddf7b45";

//   // Fetch weather data
//   const getData = async (city) => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//       );
//       const jsonData = await response.json();

//       if (jsonData.cod === 200) {
//         setData(jsonData);
//       } else {
//         setData(null);
//         console.error("City not found:", jsonData.message);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Fetch default city data on mount
//   useEffect(() => {
//     getData(search);
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearchClick = () => {
//     getData(search);
//   };

//   const handleCityClick = (e) => {
//     const city = e.target.value;
//     setSearch(city);
//     getData(city);
//   };

//   return (
//     <>
//       <nav>
//         <div>
//           <h1>WEATHER APP</h1>
//         </div>
//         <div className="icone-w">
//           <img src={iconw} alt="icon" />
//         </div>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search City"
//             value={search}
//             onChange={handleSearchChange}
//           />
//           <button onClick={handleSearchClick}>Search</button>
//         </div>
//       </nav>

//       <p className='head'>Stay Updated with Current Weather Data</p>

//       <div className="category-btn">
//         {["Delhi", "Mumbai", "Patna", "Bengaluru", "Gorakhpur"].map((city) => (
//           <button key={city} onClick={handleCityClick} value={city}>
//             {city}
//           </button>
//         ))}
//       </div>

//       <Card data={data} />
//     </>
//   );
// }



















