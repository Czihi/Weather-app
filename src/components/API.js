import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import weather from "../images/weather.png";
import coins from "../images/coins.png";


const API=(props)=>{
    let iconObj =
        {"weather": weather, "coins": coins}
    let content=(
        <div className="API">
        <h5 className="textResponsive2">{props.h3Label}</h5>
        <Link to={props.link}>
            <Button className="buttonResponsive" variant="primary">{props.buttonLabel}</Button>
    <img className="mainSiteImage"
         src={iconObj[props.source]}
         alt={props.alt}/>
    </Link>
        </div>
    )
    return content
}

export default API;