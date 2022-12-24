import React from "react";
import "./WeatherDetail.css";

const WeatherDetail = ({
  wind,
  humidity,
  minTemp,
  maxTemp,
  cloud,
  country,
}) => {
  return (
    <div className="weatherDetail">
      <div className="wind">
        <div className="container">
          <h2>{wind} mps</h2>
          <h3>Wind</h3>
        </div>
      </div>
      <div className="humidity">
        <div className="container">
          <h2>{humidity}%</h2>
          <h3>Humidity</h3>
        </div>
      </div>
      <div className="minTemp">
        <div className="container">
          <h2>{minTemp}° C</h2>
          <h3>High</h3>
        </div>
      </div>
      <div className="maxTemp">
        <div className="container">
          <h2>{maxTemp}° C</h2>
          <h3>Low</h3>
        </div>
      </div>
      <div className="cloud">
        <div className="container">
          <h2>{cloud}%</h2>
          <h3>Cloud</h3>
        </div>
      </div>
      <div className="country">
        <div className="container">
          <h2>{country}</h2>
          <h3>Region</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
