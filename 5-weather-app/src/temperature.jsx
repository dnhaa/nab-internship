import { useEffect } from 'react';
import { useState } from 'react';
export function Temperature(location) {
    const [temperature, setTemperature] = useState();
    const temperatureAPI = useMemo(() => {
        fetch('https://openweathermap.org/data/2.5/weather?q=' + location + '&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then(resp => resp.json())
        .then(resp => resp.main.temp)
    });
    return (
        <div onChange={() =>{
            setTemperature(temperatureAPI);
        }}>{temperature}</div>
    );
}