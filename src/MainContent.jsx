import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UseAuth } from "./Context/AuthContext";
import Hourly from "./Hourly";
import "./MainContent.css";
import WeatherDetail from "./WeatherDetail";
import WeatherOverview from "./WeatherOverview";

const MainContent = () => {
  var [templocation, setTemplocation] = useState();
  const { city } = UseAuth();
  var currentLocation = "";
  const baseURL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=";
  const [URL, setURL] = useState();
  const [location, setLocation] = useState();
  const weatherAPIKey = "020d35a28d7c204ba3ae81a7466ab17a";
  const [weatherURL, setWeatherURL] = useState();
  const [hourlyURL, setHourlyrURL] = useState();
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState(null);
  // var latitude = "";
  // var longitude = "";
  const findMyLocation = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      if (longitude > 0) {
        currentLocation = latitude + "%2B" + longitude;
      } else {
        currentLocation = latitude + longitude;
      }
      setURL(baseURL + currentLocation);
      // setWeatherURL(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}9&appid=${weatherAPIKey}&units=metric`
      // );
      setHourlyrURL(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=metric`
      );

      city
        ? setWeatherURL(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`
          )
        : setWeatherURL(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}9&appid=${weatherAPIKey}&units=metric`
          );
      city
        ? setHourlyrURL(
            `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}&units=metric`
          ) && console.log("ayerkew")
        : setHourlyrURL(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}&units=metric`
          );

      city ? setLocation(city) : setLocation(templocation);
    };

    const error = () => {
      console.log("error");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };
  findMyLocation();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f4c3124e71msh5a8e069d1553a4cp10c7eajsnba1a28385408",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const getLocation = (url) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setTemplocation(response.data[0].city);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getLocation(URL);
  }, [URL]);

  const getWeatherData = (url) => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(url);
        setWeather(result);
        console.log(result);
      });
  };

  useEffect(() => {
    getWeatherData(weatherURL);
  }, [weatherURL]);

  const getHourly = (url) => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setHourly(result.list);
        console.log(url);
      });
  };

  useEffect(() => {
    getHourly(hourlyURL);
  }, [hourlyURL]);

  return (
    <div className="mainContent">
      {!location ? (
        <h1>Please Wait</h1>
      ) : (
        <>
          {!weather ? (
            <h1>Hi</h1>
          ) : (
            <>
              <WeatherOverview
                className="overview"
                city={location}
                condition={weather.weather[0].description}
                temperature={weather.main.temp}
                icon={weather.weather[0].icon}
              />
              <WeatherDetail
                className="deatil"
                wind={weather.wind.speed}
                humidity={weather.main.humidity}
                minTemp={weather.main.temp_min}
                maxTemp={weather.main.temp_max}
                cloud={weather.clouds.all}
                country={weather.sys.country}
              />
              <Hourly className="hourly" data={hourly} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MainContent;
