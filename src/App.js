import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//action
import { getWeather } from "./actions/getWeather";

import "./App.css";

function App() {
  //set city
  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(getWeather(city));


  useEffect(() => {
    getWeatherInfoAction('antalya');

  },[])

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
    } else {
      getWeatherInfoAction(city);
    }
  };

  let details = "";
  if (weatherSelector.weatherinfo && weatherSelector.weatherinfo.hasOwnProperty("coord")) {
    details = 
      <div className="details">
        <h4>Weather Details</h4>
        <p>
          {weatherSelector.weatherinfo?.name}-
          <span>{weatherSelector.weatherinfo?.sys.country}</span>
        </p>
        <p>
          {Math.floor(weatherSelector.weatherinfo.main?.temp-273.15)}&deg;
        </p>
        <p>
          {weatherSelector.weatherinfo.weather[0]?.description}
        </p>
      </div>
  }else{
    details = <p>You need to type a city or the city you typed doesn't exist</p>
  }

  return (
    <React.Fragment>
      <div className="App">
        <header>
          <h1>Weather App</h1>
        </header>
      </div>

      <main>
        <form onSubmit={getWeatherInfo}>
          <div className="control">
            <input
              type="text"
              name="name"
              placeholder="City to check weather, Ex. Paris"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <input type="submit" value="Check Weather" onClick={getWeatherInfo} />
        </form>
        {details}
      </main>
    </React.Fragment>
  );
}

export default App;
