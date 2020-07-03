import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Form2NBP = (props) => {
    return(
        <Form onSubmit={props.submit}>
            <Form.Group>
                <Form.Label className="Label1" >Waluta</Form.Label>
                <Form.Control className="Form1" size="sm" type="text" value={props.value} onChange={props.change} placeholder="Wpisz walutę" />
            </Form.Group>
            <Button className="Button1"  variant="primary" type="Submit">Wyszukaj waluty</Button>
        </Form>
    )
}

export default Form2NBP