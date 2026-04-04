import React, { useEffect, useState } from 'react';
import "./NewsApp.css";
import Card from '../Card/Card';
import iconw from "./icon.png";

export default function NewsApp() {
  const [search, setSearch] = useState("Delhi");
  const [data, setData] = useState(null);

  const API_KEY = "dc310f48e9d0be27a8560ee3dddf7b45";

  // Fetch weather data
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
        console.error("City not found:", jsonData.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch default city data on mount
  useEffect(() => {
    getData(search);
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    getData(search);
  };

  const handleCityClick = (e) => {
    const city = e.target.value;
    setSearch(city);
    getData(city);
  };

  return (
    <>
      <nav>
        <div>
          <h1>WEATHER APP</h1>
        </div>
        <div className="icone-w">
          <img src={iconw} alt="icon" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search City"
            value={search}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </nav>

      <p className='head'>Stay Updated with Current Weather Data</p>

      <div className="category-btn">
        {["Delhi", "Mumbai", "Patna", "Bengaluru", "Gorakhpur"].map((city) => (
          <button key={city} onClick={handleCityClick} value={city}>
            {city}
          </button>
        ))}
      </div>

      <Card data={data} />
    </>
  );
}



















// import React, { useEffect, useState } from 'react'
// import "./NewsApp.css"
// import Card from '../Card/Card'
// import iconw from "./icon.png"
// export default function NewsApp() {

//   const [search, setSearch] = useState("delhi")

//   const Apikey = "dc310f48e9d0be27a8560ee3dddf7b45"

//   const [data, setData] = useState(null);

//   const getData = async () => {

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${Apikey}`);
//     const jsonData = await response.json()
//     console.log(jsonData);
//     setData(jsonData)
//     //console.log(data.name);
//   }
//   // useEffect(() => {
//   //   getData()
//   // },[])

//   const userInput = (e) => {
//     setSearch(e.target.value )
//     getData();
     
//   }

//   const handleInput = (e) => {
//     // console.log(e.target.value);
//     setSearch(e.target.value);
//   }

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
//           <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
//           <button onClick={getData}>Search</button>
//         </div>
//       </nav>
//       <div>
//         <p className='head'>Stay Update with Current Weather data</p>
//       </div>
//       <div className="category-btn">
//         <button onClick={userInput} value={"Delhi"}>Delhi</button>
//         <button onClick={userInput} value={"Mumbai"}>Mumbai</button>
//         <button onClick={userInput} value={"Patna"}>Patna</button>
//         <button onClick={userInput} value={"Bengaluru"}>Bengaluru</button>
//         <button onClick={userInput} value={"Gorakhpur"}>Gorakhpur</button>
//       </div>

//       <div>
//         <Card data={data} />

//       </div>




//     </>
//   )
// }
