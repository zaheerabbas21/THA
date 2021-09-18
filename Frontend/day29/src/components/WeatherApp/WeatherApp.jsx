import React, { useState, useEffect } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=50de925b3daa9f647dbad7228c7264e0`;
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson.list[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchApi();
  }, [search]);
  return (
    <div className="weatherapp">
      <div className="box">
        <div className="input">
          <input
            type="search"
            placeholder="Enter City Name"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <div className="info">
            <img
              className="desc"
              src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
              alt="imgicon"
            />
            <h2 className="location">
              <i className="fas fa-search-location">
                <h3>{search}</h3>
              </i>
            </h2>
            <h1 className="temp">{city.main.temp}°Cel</h1>
            <h3 className="temp_max">
              Min : {city.main.temp_min}
              °Cel | Max : {city.main.temp_max}
              °Cel
            </h3>
            <h4> Humidity : {city.main.humidity}%</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
