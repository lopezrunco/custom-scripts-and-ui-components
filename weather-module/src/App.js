import { useEffect, useState } from 'react'
import { API_KEY } from './weather-api-key'
import Weather from './components/Weather'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loaded, setLoaded] = useState(true)

  // Fetch weather data using the name of the city
  async function fetchWeatherData(cityName) {
    setLoaded(false)
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    // Connect to API. If response is OK, fetch the data and set on state
    try {
      const response = await fetch(API)
      if (response.status === 200) {
        const data = await response.json()
        setWeatherData(data)
      } else {
        setWeatherData(null)
      }
      setLoaded(true)
    } catch (error) {
      console.log('Error fetching the data', error)
    }
  }
  useEffect(() => {
    fetchWeatherData('Montevideo')
  }, [])

  return (
    <div className="App">
      {
        (!loaded)
          ? <p>Loading...</p>
          : (weatherData === null)
            ? <p>City not found!</p>
            : <Weather weatherData={weatherData} />
      }
    </div>
  )
}

export default App