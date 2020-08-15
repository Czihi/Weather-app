import React from 'react'
import Button from "react-bootstrap/Button"
const Result = props => {
    const {city, sunrise, sunset, wind, date, pressure, temp, feels, clouds, icon, err} = props.weather;
    const sunr = new Date(sunrise * 1000).toLocaleTimeString();
    const suns = new Date(sunset * 1000).toLocaleTimeString();
    const time = new Date().toLocaleDateString();
    let content = null;

    function showData(){
        if(document.getElementById("resultData").style.display==="block"){
            document.getElementById("resultData").style.display="none";
            document.getElementById("dataButton").innerHTML="Więcej informacji";
        }

        else{
            document.getElementById("resultData").style.display="block";
            document.getElementById("dataButton").innerHTML="Ukryj";
        }
    }

    if (!err && city) {
        content = (
            <div className="result-weather">
                <div className="subtitleResponsive">Pogoda dla: {city}</div>
                <div className="background">
                <div className="background__group">
                <div className="background__temperature">{(temp - 273).toFixed(0)} °C</div>
                    <div className="background__time">{date}</div>
                </div>
                    <img className="background__icon" src={icon} alt="icon"/>
                </div>
                <Button id="dataButton" className="result__button" variant="primary" onClick={showData}>Więcej informacji</Button>
                <div id="resultData" className="result__data">
                <div>Data i czas: {time} {date}</div>
                <div>Temperatura: {(temp - 273).toFixed(2)} stopni Celsjusza</div>
                <div>Odczuwalna: {(feels - 273).toFixed(2)} stopni Celsjusza</div>
                <div>Zachmurzenie: {clouds} %</div>
                <div>Prędkośc wiatru: {wind} km/h</div>
                <div>Ciśnienie atmosferyczne: {pressure} hPa</div>
                <div>Wschód słońca: {sunr}</div>
                <div>Zachód słońca: {suns}</div>
                </div>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>

    );
};

export default Result