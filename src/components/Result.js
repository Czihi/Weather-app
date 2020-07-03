import React from 'react'

const Result = props => {
    const {city, sunrise, sunset, wind, date, pressure, temp, feels, clouds, err} = props.weather
    const sunr = new Date(sunrise * 1000).toLocaleTimeString();
    const suns = new Date(sunset * 1000).toLocaleTimeString();
    const time = new Date().toLocaleDateString()
    let content = null;
    if (!err && city) {
        content = (
            <div>Pogoda dla: {city}
                <div>Data i czas: {time} {date}</div>
                <div>Temperatura: {(temp - 273).toFixed(2)} stopni Celsjusza</div>
                <div>Odczuwalna: {(feels - 273).toFixed(2)} stopni Celsjusza</div>
                <div>Zachmurzenie: {clouds} %</div>
                <div>Prędkośc wiatru: {wind} km/h</div>
                <div>Ciśnienie atmosferyczne: {pressure} hPa</div>
                <div>Wschód słońca: {sunr}</div>
                <div>Zachód słońca: {suns}</div>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>

    );
}

export default Result