import React, { useEffect, useState } from 'react'
import "./weatherCard.css"
import search_icon from "../assets/search.png"
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
const WeatherCard = () => {
    
    const [weatherData,setWeatherData] = useState(false);
    const [searchValue, setSearchValue] = useState(" ")
    const searchApi = async (city)=>{
        try{
            const key="258076b2273ed06edac00322e27c5728";
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=${key}`;

            const response= await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    function kelvinToCelsius(kelvin) {
        let celsius = kelvin - 273.15;
        return celsius.toFixed(2);
    }

    useEffect(()=>{
        searchApi("delhi")
    },[])
    
  return (

    <>
      <div className="weathercard">
        <div className="searchBar">
            <input type="text" onChange={(e)=>setSearchValue(e.target.value)} placeholder='Enter City' />
            <img src={search_icon} alt="search icon" onClick={() => searchApi(searchValue) } />
        </div>
        <img src={clear_icon} alt="" className='weather_icon' />
        <span className='temp'>{kelvinToCelsius(weatherData.main?.temp)}<sup>o</sup> c</span>
        <span className='location'>{weatherData?.name}</span>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="humidity icon" />
                <div>
                    <p>{weatherData.main?.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="wind icon" />
                <div>
                    <p>{weatherData.wind?.speed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard
