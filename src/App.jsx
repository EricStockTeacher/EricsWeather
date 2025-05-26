import './App.css'
import Forecast from './Forecast.jsx'
import weatherData from './weatherData.json'
import { useState } from "react";


function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <button onClick={ () => {setCount(count+1); console.log(count)} }>Click Here</button>
      <h2>Count is: {count}</h2>
      <h2>Eric's Weather for {weatherData.town}</h2>
      <Forecast data={weatherData.forecast}/>
      
    </>
  )
}

export default App
