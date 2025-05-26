import './App.css'
import Forecast from './Forecast.jsx'
import weatherData from './weatherData.json'


function App() {
 
  return (
    <>
      <h2>Eric's Weather for {weatherData.town}</h2>
      <Forecast data={weatherData.forecast}/>
    </>
  )
}

export default App
