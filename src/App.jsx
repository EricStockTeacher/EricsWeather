import './App.css'
import Weather from './Weather.jsx'

function App() {

  return (
    <>
      <h2>Eric's Weather for Wolfville Nova Scotia</h2>
      <Weather day="Tuesday" temp="10 degrees C" precip="10 mm" uv="2 (low)"/>
      <Weather day="Wednesday" temp="12 degrees C" precip="0 mm" uv="4 (high)"/>
      <Weather day="Thursday" temp="8 degrees C" precip="0 mm" uv="3 (medium)"/>
    </>
  )
}

export default App
