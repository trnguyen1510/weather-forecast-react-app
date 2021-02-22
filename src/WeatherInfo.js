import React from "react";
import FormattedDate from "./FormmatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";


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
                        <div className="float-left">

                        <WeatherIcon code={props.data.icon}/>

                        </div>
                        
                        <div className="float-left">
                            <WeatherTemp celsius={props.data.temperature} />
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