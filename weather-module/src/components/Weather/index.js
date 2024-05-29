import { useEffect, useState } from "react"
import './style.css'

export default function Weather({ weatherData }) {
    const [weatherName, setWeatherName] = useState(null)
    const {
        weather,
        name,
        main: { temp, humidity }
    } = weatherData
    const [{ main, icon }] = weather

    useEffect(() => {
        setWeatherName(getWeatherName(main))
    }, [weatherData, main])

    function getWeatherName(weather) {
        if (weather === 'Snow') return 'Nieve'
        if (weather === 'Thunderstorm') return 'Tormenta'
        if (weather === 'Rain') return 'Lluvioso'
        if (weather === 'Drizzle') return 'Llovizna'
        if (weather === 'Haze') return 'Niebla'
        if (weather === 'Clouds') return 'Nuboso'
        if (weather === 'Clear') return 'Soleado'
        return 'Soleado'
    }

    return (
        <div className="content-wrapper">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`Tiempo en ${name}`} />
            <div className="info-wrapper">
                <h2>{temp} °C</h2>
                <h3>{getWeatherName(main)}</h3>
                <p>Humedad: {humidity}%</p>
                <small>{name}, Uruguay</small>
            </div>
        </div>
    )
}