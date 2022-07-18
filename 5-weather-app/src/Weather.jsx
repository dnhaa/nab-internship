import { useEffect } from 'react';
import { useState } from 'react';
import './Weather.css';
export function Weather() {
    // const [temperature, setTemperature] = useState(0);
    // const [description, setDescription] = useState("");
    const[city, setCity] = useState("London");
    const[weatherResp, setWeatherResp] = useState({})
    useEffect(() => {
        fetch('https://openweathermap.org/data/2.5/weather?q=' + city + '&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then(resp => resp.json())
        .then(resp => {
            setWeatherResp(resp);
            //console.log(resp);
        });
    });
    //console.log(weatherResp);
    
        return (
            <div className='container' onChange={w => setWeatherResp(w.target.value)}>
                
                {(typeof weatherResp.main != 'undefined' || typeof weatherResp.weather != 'undefined') ?
                <div>
                    <div className='title'>Weather</div>
                    <div className='city'>{city === "" ? "London" : city}</div>
                    <div>{weatherResp.main.temp}&#8451;</div>
                    <div>{weatherResp.weather[0].description}</div>      
                </div> : 
                <div>
                </div>}
                <form>
                    <input
                        placeholder='Input a city...'
                        onChange={inputCity => {
                            if (inputCity.target.value.trim === ""){
                                setCity("London")
                            } else {
                                setCity(inputCity.target.value)
                            }
                            
                        }}
                    ></input>
                </form>
            </div>
        );
    
    
}