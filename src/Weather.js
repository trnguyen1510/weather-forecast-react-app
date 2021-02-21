import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date: "Saturday 6:30",


        })

       

    }

    if ( weatherData.ready ) {

        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Search for a city" className="searchForm form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-outline-primary w-100" />
                        </div>
                    </div>

                </form>
                <h1>{weatherData.city}</h1>
                <ul className="additionMain">
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                            <div className="float-left">
                                <span className="temp">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-6" className="weatherInfo">
                        <ul>
                            
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>

                    </div>

                </div>


            </div>
        )
    } else {

        const apiKey = "d80253f7bab7ebfb0d574948c8b564be";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}