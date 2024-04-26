import sunny from "./assets/altered/sunny.jpg";
import snow from "./assets/altered/snow.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherForcast";

function App() {

  const [city, setCity] = useState("Paris");

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState(`metric`);

  const [bg, setBg] = useState(sunny);

  useEffect(() => {
    const fetchedWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data);
      console.log(data);
      // Dynamic Background
      const bgchange = units === 'metric' ? 20 : 60;
      if (data.temp <= bgchange) setBg(snow)
      else setBg(sunny)
    }
    fetchedWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  }
  
  return (
    <div className="app" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        {
          weather && (
            
        <div className="container">
        <div className="section section__inputs">
          <input onKeyDown={enterKeyPressed} type="text" placeholder="Enter City"/>
          <button onClick={(e) => handleUnitsClick(e)}>°F</button>
        </div>
        <div className="section section__temperature">
          <div className="breifs">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconURL} alt="weatherIcon" />
            <h3>{weather.description}</h3>
          </div>
          <div className="temperature">
            <h1>{`${weather.temp} °${units === 'metric' ? 'C' : 'F'}`}</h1>
          </div>
        </div>

        {/* Bottom description */}
        <Descriptions weather = {weather} units = {units}/>
      </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
