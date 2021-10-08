const weatherInfo = (state = {
    weatherinfo: {}
}, action) => {
    //check the action type
    if(action.type === "GET_WEATHER"){
        state = {...state, weatherinfo: action.payload}
    }
    return state;
};

export default weatherInfo;