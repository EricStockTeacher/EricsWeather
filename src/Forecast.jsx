
function Forecast({data, changeCity, city}) {

    return (
        <>
            <button onClick={changeCity}>{city}</button>
            <p>Temp: {data.current_weather.temperature}</p>
            <p>Wind: {data.current_weather.windspeed}</p>
            <p>Day: {data.current_weather.time}</p>
        
        </>
    )
}

export default Forecast