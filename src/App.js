import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />

      <footer> This project was coded by Tram Nguyen and is {" "}
          <a href="https://github.com/trnguyen1510/weather-forecast-react-app" target="_blank">open-source on Github</a>


        </footer>
      </div>
    </div>
  );
}
