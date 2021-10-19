import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CityCard from "../Card/CityCard";
import { deleteCity, getWeather, updateCities } from "../../actions/getWeather";

import "./home.css"
import "../About/about.css"
import "../../App.css";
import { Link } from "react-router-dom";


function Home() {
    const [city, setCity] = useState("");
    const [filterCities, setfilterCities] = useState([]);
    const [timer, setTimer] = useState(0);
    const weatherSelector = useSelector((state) => state.WeatherInfo);

    const cities = weatherSelector.cities;
    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(getWeather(city));

    useEffect(() => {
           const refreshTimer = setInterval(() => { 
                setTimer(timer + 1 ) 
            }, 1000);

        return () => clearInterval(refreshTimer); 
     
    },[timer]);

    const getWeatherInfo = (e) => {
        e.preventDefault();
        if (city !== "") {
            getWeatherInfoAction(city);
        }
        setCity("");
    };

    const handleSearch = (e) => {   
            setCity(e.target.value)
            if (e.target.value){
                const newList = weatherSelector.weatherinfolist.filter(item => item.weatherDetails.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
                setfilterCities(newList)        
            }else{
                setfilterCities(weatherSelector.weatherinfolist)
            }    
    };

    const handleRefresh = () => {
        if(timer >= 15){
            cities.map(val => 
                    (
                       dispatch(deleteCity(val)),
                       getWeatherInfoAction(val)
               )
               )
               dispatch(updateCities(cities))
               setTimer(0)
        }
    }



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
                <div className="control2">
                <button className="refresh" onClick={handleRefresh}>Refresh</button>
                <input className="searchbox" type="text" placeholder="fulltext search by name" onChange={handleSearch} />
        
                </div>

                {city ? ( <div className="cards">
                    {filterCities.map((city) => (
                        <CityCard key={city.weatherDetails.name} {...city} />
                    ))}
                </div>) : ( <div className="cards">
                    {weatherSelector.weatherinfolist.map((city) => (
                        <CityCard key={city.weatherDetails.name} {...city} />
                    ))}
                </div>)}
               
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