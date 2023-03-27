import {useEffect} from 'react';
import Spinner from '../spinner/Spinner';

const WeatherInfo = ({process, setWeather, current, weather, dailyForecasts, hours, locationAndTime, currentLocationAndTime, num}) => {
    useEffect(() => {
        if (locationAndTime && (num !== 0 || num === 0 && hours !== +currentLocationAndTime.time.slice(0, currentLocationAndTime.time.indexOf(':')))) {
            updateWeather();
        } else if (num !== 0) {
            return;
        } else {
            setWeather(current);
        }
    }, [hours]);

    const updateWeather = () => {
        setWeather({
            condition: dailyForecasts[num].hourlyForecasts[hours].condition.text,
            icon: dailyForecasts[num].hourlyForecasts[hours].condition.icon,
            tempo: Math.floor(dailyForecasts[num].hourlyForecasts[hours].temp_c),
            humidity: `${dailyForecasts[num].hourlyForecasts[hours].humidity}%`,
            wind: `${dailyForecasts[num].hourlyForecasts[hours].wind_kph} kph`,
            clouds: `${dailyForecasts[num].hourlyForecasts[hours].cloud}%`
        });
    }

    return process === 'confirmed' ? (
        <>
            <div className="main_info">
                <img src={weather.icon} alt="sun with clouds" className="weather_icon"></img>
                <div className="tempo">
                    <span className="number">{weather.tempo}</span>
                    <span className="degrees">&deg;C</span>
                </div>
                <div className="state">{weather.condition}</div>
            </div>
            <div className="additional_info">
                <span>Clouds: {weather.clouds}</span>
                <span>Humidity: {weather.humidity}</span>
                <span>Wind speed: {weather.wind}</span>
            </div>
        </>
    ) : <Spinner/>; 
}

export default WeatherInfo;