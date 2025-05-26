import Weather from './Weather.jsx'


function Forecast({data}) {
    
    return (
        <>
        {
            data.map( (weatherDay) => {
                return <Weather day={weatherDay.day} temp={weatherDay.temp} precip={weatherDay.precip} uv={weatherDay.uv}/>
            })
        }
        </>
    )
}

export default Forecast