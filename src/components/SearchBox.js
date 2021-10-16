import { useState } from "react";
import { useSelector } from "react-redux";
import CityCard from "./Card/CityCard";


function SearchBox(city) {
  const [searchTerm, setSearchTerm] = useState("");
  const weatherSelector = useSelector((state) => state.WeatherInfo);
  console.log('weather info list ',weatherSelector.weatherinfolist); 


  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
      {weatherSelector.weatherinfolist.filter((val) => {
        if(searchTerm === ""){
            console.log(val);
          return val
        }else if(val.weatherDetails.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key) => {
        return (
        
          <div className="city" key={key}>
                    
                    <p>{val.weatherDetails.name}</p>
                    
                </div>

        );
      })}
    </div>
  );
}

export default SearchBox;