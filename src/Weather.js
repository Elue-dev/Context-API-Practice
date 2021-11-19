import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather() {

    const [temp, setTemp] = useState('')
    const [weather, setWeather] = useState('')
    const [coord, setCoord] = useState('')
    const [icon, setIcon] = useState('')

    const [city, setCity] = useState('')

    useEffect(() => {
        getWeather()
      },[city])

    const getWeather = (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`)
        .then((response => {
          setTemp(response.data.main.temp)
          setWeather(response.data.weather[0].description)
          setCoord(response.data.coord.lat)
          setIcon(response.data.weather[0].icon)
        }))
      }

      const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

      const handleChange = e => {
          e.preventDefault()
          setCity(e.target.value)
      }

      const searchCity = (e) => {
          e.preventDefault()
          const cityName = document.getElementById('city-name').value;
          getWeather(cityName)
      }


    return (
        <>
            <form onSubmit = {searchCity}>
                <input onChange={handleChange} type='text'  id='city-name' placeholder='Enter a city' value={city}/>
                <button type='submit'>Submit</button>
            </form>
            <h1>{city} Weather</h1>
            <h3>Temperature: {temp}</h3>
            <h3>Description: {weather}</h3>
            <h3>Latitude: {coord}</h3>
            <h3>Icon: <img src= {iconUrl}/></h3>
        </>
    )
}

export default Weather
