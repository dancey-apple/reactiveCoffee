import './App.css';
import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CoffeeCards from './components/CoffeeCards';

function App() {
  const weatherApiKey = '5a1c0116f2b7117010dfd22d712edd74'

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          // getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)
          // //browser
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }
  
  return (
    <div>
      <NavBar />
      <Home />
      <CoffeeCards />
    </div>
  )
}

export default App;
