import { GET_WEATHER, GET_WEATHER_DATA_ERROR,
    DELETE_CITY, } from "../types/types";


const INITIAL_STATE =  {
    counter: 0,
    weatherinfolist: [],
};

const weatherInfo = ( state = INITIAL_STATE, action,
 ) => {
    //check the action type
    switch (action.type) {
        case GET_WEATHER:
        return {
            counter: state.counter + 1,
            weatherinfolist: [
                ...state.weatherinfolist,
                {
                    id: state.counter + 1,
                    weatherDetails: action.payload,
                    message: ''
                },
            ],
        };

        case GET_WEATHER_DATA_ERROR:
            return {
                ...state, message: action.payload 
            };

        case DELETE_CITY:
            
            return {
                ...state,
                weatherinfolist: state.weatherinfolist.filter((item) => item.id !== action.payload),
            };
            
            default:
                return state;
              
     }
            
};

        
        
export default weatherInfo;