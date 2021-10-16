import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CityCard from "../Card/CityCard";
import { getWeather } from "../../actions/getWeather";

import "./home.css"
import "../About/about.css"
import "../../App.css";
import { Link } from "react-router-dom";


function Home() {
    const [city, setCity] = useState("");
    const weatherSelector = useSelector((state) => state.WeatherInfo);
    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(getWeather(city));

    useEffect(() => {
        getWeatherInfoAction("antalya");
    },[]);

    const getWeatherInfo = (e) => {
        e.preventDefault();
        if (city !== "") {
            getWeatherInfoAction(city);
        }
        setCity("");
    };

    return (
        <React.Fragment>
            <div className="App">
                <header>
                    <h1>Weather App</h1>
                </header>
            </div>

            <main>
                <form>
                    <div className="control">
                        <input
                            type="text"
                            name="name"
                            placeholder="City to check weather, Ex. Antalya"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <button className="add" type="submit" onClick={getWeatherInfo}>
                        Add
                    </button>
                        
                </form>
                <div className="cards">
                    {weatherSelector.weatherinfolist.map((city) => (
                        <CityCard key={city.id} {...city} />
                    ))}
                </div> 
                <ul className="pages">
                    <Link to="/" style={{ textDecoration: 'none' , color: 'black'}}>
                    <li>Home</li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' , color: 'black'}}>
                    <li>About</li>                    
                    </Link>
                </ul>
            </main>
        </React.Fragment>
    );
}

export default Home;