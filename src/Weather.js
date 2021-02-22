import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
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
            date: new Date(response.data.dt * 1000),


        })

    }

    function search() {
        const apiKey = "d80253f7bab7ebfb0d574948c8b564be";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        //Search for city
        search();

    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Search for a city" className="searchForm form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-outline-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
            </div>
        )
    } else {

        search();
        return "Loading...";
    }
}