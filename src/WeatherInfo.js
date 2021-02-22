import React from "react";
import FormattedDate from "./FormmatedDate"

export default function WeatherInfo(props) {
    return (
        <div className="information">
            <h1>{props.data.city}</h1>
            <ul className="additionMain">
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={props.data.iconUrl} alt={props.data.description} className="float-left" />
                        <div className="float-left">
                            <span className="temp">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>

                        </div>
                    </div>
                </div>

                <div className="col-6 weatherInfo">
                    <ul>

                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>

                </div>

            </div>


        </div>
    );

}