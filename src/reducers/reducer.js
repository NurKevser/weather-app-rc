import { combineReducers } from "redux";
import { weatherInfo } from "./weatherReducer";

//combine reducers
const reducers = combineReducers({
    WeatherInfo: weatherInfo,
});

export default reducers;