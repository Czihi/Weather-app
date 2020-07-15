import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ConvertRate = (props)=>{
    return (
        <Form className="Form1" onSubmit={props.submit}>
            <Form.Group>
                <Form.Label className="Label1">Narodowy Bank Polski API dostarczy ci przelicznik z pierwszej waluty na
                    drugą</Form.Label>
                <input className="inputResponsive" size="sm" type="text" value={props.amountValue}
                       onChange={props.amountChange}
                       placeholder="Kwota"/>
                <br/>
                <input className="inputResponsive" size="sm" type="text" value={props.firstValue}
                       onChange={props.firstChange}
                       placeholder="Wpisz pierwszą walutę"/>
                <br/>
                <input className="inputResponsive" size="sm" type="text" value={props.secondValue}
                       onChange={props.secondChange}
                       placeholder="Wpisz drugą walutę"/>
            </Form.Group>
            <Button className="buttonResponsive" variant="primary" type="Submit">Przelicz</Button>
            <br/>
        </Form>
    );
};

export default ConvertRate;