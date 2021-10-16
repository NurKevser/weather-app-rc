import { deleteCity } from "../actions/getWeather"; 
import { useDispatch } from "react-redux";

import "weather-icons/css/weather-icons.css";
import weatherIcons from "./Icons";

const CityCard = (city) => {
    const iconId = city.weatherDetails.weather[0]?.icon;
    console.log("iconid :",iconId);
    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCity(city.id));
      };



    let details = "";
    if (city.weatherDetails && city.weatherDetails.hasOwnProperty("coord")) {
        details = (
            <div className="details">
                <h4>Weather Details</h4>
                <p>
                    {city.weatherDetails?.name}-
                    <span>{city.weatherDetails?.sys.country}</span>
                </p>
                <weatherIcons>{weatherIcons[iconId]}</weatherIcons>
                <p>
                    {Math.floor(city.weatherDetails.main?.temp - 273.15)}&deg;
                </p>
                <p>{city.weatherDetails.weather[0]?.description}</p>
                
                <i className="far fa-trash-alt" onClick={() => handleDelete(city.id)}></i>
                
            </div>
        );
    } else {
        details = (
            <p>You need to type a city or the city you typed doesn't exist</p>
        );
    }

    return <div>{details}</div>;
};

export default CityCard;