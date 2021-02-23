import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }


    if (loaded && props.city === forecast.city.name) {

        return (<div className="WeatherForecast row">
            {forecast.list.slice(0, 6).map(function (forecastItem) {
                return <WeatherForecastPreview data={forecastItem} />;
            })}
            {/*Another solution */}
            {/* <WeatherForecastPreview data={forecast.list[0]}/>
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
            <WeatherForecastPreview data={forecast.list[5]} /> */}

        </div>
        );
    } else {
        let apiKey = "d80253f7bab7ebfb0d574948c8b564be";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=
    ${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);
        return null;
    }
}