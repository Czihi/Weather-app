import Button from "react-bootstrap/Button";
import React from "react";
import {Link} from "react-router-dom";

const CodSection = props => {
    let content=(
        <div>
        <h4>Nie wiesz jaki kod ma interesująca Cię waluta?</h4>
            <br/>
            <Link to="/codes">
        <Button className = "buttonCheck" variant = "primary"> Sprawdź tutaj!</Button>
            </Link>
        </div>
)
    return(content);

}

export default CodSection;