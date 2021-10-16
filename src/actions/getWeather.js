import axios from "axios";

export const getWeather = (city, country) => async (dispatch) => {
    const API_KEY = "9921d952e47813fe01ce96bce2a4c561"
    await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    .then(res => {
       dispatch({ type: 'GET_WEATHER', payload: res.data })
    })
    .catch(error => dispatch({ type: "GET_WEATHER_DATA_ERROR", payload: "loading error!"}));
    
};


export const  deleteCity = (id) => (dispatch) => {
    dispatch({
        type: "DELETE_CITY",
        payload: id,
    })
}