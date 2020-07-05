import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import weather from "../images/coins.png";
import coins from "../images/weather.png";


const API=(props)=>{
    let iconObj =
        {"weather": weather, "coins": coins}
    let content=(
        <div>
        <h3>{props.h3Label}</h3>
        <Link to={props.link}>
        <Button variant="primary">{props.buttonLabel}</Button>
    <img className="mainSiteImage"
         src={iconObj[props.source]}
         alt={props.alt}/>
    </Link>
        </div>
    )
    return content
}

export default API;