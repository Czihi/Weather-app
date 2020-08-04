import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form2NBP = (props) => {
    return (<div className="rateForm">
        <Form onSubmit={props.submit}>
            <Form.Group>
                <Form.Label className="label">Narodowy Bank Polski API dostarczy ci najnowszych informacji o kursach waluty dla podanego przez ciebie kodu waluty</Form.Label>
                <input  className="inputResponsive" size="sm" type="text" value={props.value} onChange={props.change}
                              placeholder="Wpisz walutę"/>
            </Form.Group>
            <Button className="buttonResponsive" variant="primary" type="Submit">Wyszukaj waluty</Button>
            <br/>
        </Form>
        </div>
    )
};

export default Form2NBP