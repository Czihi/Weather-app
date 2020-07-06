import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";

const CodSection = props => {
    let content=(
        <div className="Form1">
        <h4 className="textResponsive2">Nie wiesz jaki kod ma interesująca Cię waluta?</h4>
            <br/>
            <Link to="/Weather-app/codes">
        <Button className = "buttonResponsive" variant = "primary" onClick={props.check}> Sprawdź tutaj!</Button>
            </Link>
        </div>
)
    return(content);

}

export default CodSection;