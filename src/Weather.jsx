function Weather({day, temp, precip, uv}) {

    return (
        <>
            <h3>Day: {day}</h3>
            <p>Temperature: {temp}</p>
            <p>Precipitation: {precip}</p>
            <p>UV Index: {uv} </p>
        </>
    )
}

export default Weather