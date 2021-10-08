
export function getWeather(city, country){

    const API_KEY = "9921d952e47813fe01ce96bce2a4c561"
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        .then(res => {
            return res.json();
        })
        .then(JSONres => {
            //dispatch the action
            dispatch({type:'GET_WEATHER',
            payload: JSONres});
        }).catch(() => {
            dispatch({
                type: "GET_WEATHER_DATA_ERROR",
                payload: "loading error!"
            })
        })
    }
}