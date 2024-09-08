import React from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import WeatherCard from '../../components/weather/WeatherCard'

const Weather = () => {
  return (
    <>
        <div className="layout">
            <Sidebar/>
            <WeatherCard/>
        </div>
    </>
  )
}

export default Weather