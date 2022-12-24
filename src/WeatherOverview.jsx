import React from "react";
import "./WeatherOverview.css";

const WeatherOverview = ({ city, condition, temperature, icon }) => {
  var cond = "";
  const upperCase = () => {
    cond = condition.toUpperCase();
  };
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  upperCase();
  return (
    <div className="weatherOverview">
      <h1 className="City">{city}</h1>
      <h3 className="date">{today.toDateString()}</h3>
      <img
        className="weather__Image"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt=""
      />
      <h1 className="temperature">{temperature}° C</h1>
      <h3 className="weather__Condition">{cond}</h3>
    </div>
  );
};

export default WeatherOverview;
