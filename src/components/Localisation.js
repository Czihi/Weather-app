import React from "react";
import Button from "react-bootstrap/Button";

function getLocation() {
    let x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

const Localisation = () => {
    return (<div>
        <Button onClick={getLocation()}>Try It</Button>
        <p id="demo"></p>
    </div>)
};

export default  Localisation;