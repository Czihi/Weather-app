import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form"
import {Link} from "react-router-dom";


const CodSection = props => {
    return (
        <div className="checkCodes">
            <Form.Label><h4>Nie wiesz jaki kod ma interesująca Cię waluta?</h4></Form.Label>
            <br/>
            <Link to="/Weather-app/codes">
                <Button className="buttonResponsive" variant="primary" onClick={props.check}> Sprawdź tutaj!</Button>
            </Link>
            <br/>
            <br/>
        </div>
    );

};

export default CodSection;