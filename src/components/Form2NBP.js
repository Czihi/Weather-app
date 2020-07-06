import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form2NBP = (props) => {
    return (
        <Form className="Form1" onSubmit={props.submit}>
            <Form.Group>
                <Form.Label className="Label1">Narodowy Bank Polski API dostarczy ci najnowszych informacji o kursach waluty dla podanego przez ciebie kodu waluty</Form.Label>
                <input  size="sm" type="text" value={props.value} onChange={props.change}
                              placeholder="Wpisz walutę"/>
            </Form.Group>
            <Button variant="primary" type="Submit">Wyszukaj waluty</Button>
            <br/>
        </Form>
    )
}

export default Form2NBP