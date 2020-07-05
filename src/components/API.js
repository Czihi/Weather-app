import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const API=(props)=>{
    let content=(
        <div>
        <h3>{props.h3Label}</h3>
        <Link to={props.link}>
        <Button variant="primary">{props.buttonLabel}</Button>
    <img className="mainSiteImage" src={window.location.origin+props.source} alt={props.alt}/>
    </Link>
        </div>
    )
    return content
}

export default API;