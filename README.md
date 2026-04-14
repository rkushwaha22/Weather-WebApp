# ☁️ Live Weather App

Stay updated with real-time weather conditions! This application fetches live data from the **OpenWeatherMap API** to provide accurate temperature, humidity, and wind speed for any city globally.

🌐 **Live Demo:** [https://itsliveweather.netlify.app](https://itsliveweather.netlify.app)

---

## ✨ Key Features
- **Global Search:** Get weather details for any city by simply typing its name.
- **Real-Time Data:** Fetches live temperature, humidity, wind speed, and weather descriptions.
- **Dynamic Icons:** Displays weather-specific icons (Sun, Clouds, Rain, etc.) based on the current weather condition.
- **Metric Units:** Temperature is displayed in Celsius for easy understanding.
- **Fully Responsive:** Beautifully designed UI that works perfectly on all screen sizes.

---

## 🛠️ Tech Stack
- **Frontend:** React.js
- **Styling:** CSS
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Data Fetching:** Axios / Fetch API

---

## ⚙️ How It Works
1. **User Input:** The user enters a city name in the search bar.
2. **API Call:** The app sends a request to the `data/2.5/weather` endpoint with the city name and API Key.
3. **State Management:** The JSON response is parsed and stored in React state to update the UI dynamically without a page reload.

---

## 🚀 Local Setup
1. Clone the repo:
   ```bash
   git clone [https://github.com/itsrkdev/Weather-App.git](https://github.com/itsrkdev/Weather-App.git)
