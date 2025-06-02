import './App.css'
import Forecast from './Forecast.jsx'
import { useReducer, useState, useEffect } from "react";


function App() {
  let [weatherData, setWeatherData] = useState(null);
  let [city, toggleCity] = useReducer( (current) => current == "St John's" ? "Ottawa" : "St John's", "St John's")
  
  let cityCoords = [ [47.55, -52.74], [45.42, -75.70]]

  useEffect( () => {
      async function grabWeather() {

          let index = city == "St John's" ? 0 : 1;
          let apiCall = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityCoords[index][0]}&longitude=${cityCoords[index][1]}&current_weather=true`);
          let data = await apiCall.json()
          setWeatherData(data);
      }
      grabWeather()
      console.log("grab weather");
    
  }, [city])


  if( weatherData == null ) {
    return (
      <p>Loading...</p>
    )
  }


  return (
    <>
      <h2>Weather</h2>
      <Forecast data={weatherData} changeCity={toggleCity} city={city}/>
    </>
  )
}

export default App
