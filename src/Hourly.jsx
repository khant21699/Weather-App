import React from "react";
import "./Hourly.css";

const Hourly = ({ data }) => {
  const upperCase = (txt) => {
    var cond = txt.toUpperCase();
    return cond;
  };
  const ViewData = () => {
    return (
      <div className="viewData">
        {data.map((d) => {
          return (
            <div className="view__Data" key={d.dt}>
              <h2>{d.dt_txt}</h2>
              <div className="forecastData">
                <div className="img">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`}
                    alt=""
                  />
                  <h2>{upperCase(d.weather[0].description)}</h2>
                </div>
              </div>
              <div className="detail">
                <div>
                  <h2>{d.main.temp}° C</h2>
                  <h3>Temp</h3>
                </div>
                <div>
                  <h2>{d.main.humidity}%</h2>
                  <h3>Humidity</h3>
                </div>
                <div>
                  <h2>{d.wind.speed} mps</h2>
                  <h3>Wind</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="hourly">
      <ViewData />
    </div>
  );
};

export default Hourly;
