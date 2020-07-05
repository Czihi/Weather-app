import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form2 = (props) => {
    return (
        <Form onSubmit={props.submit}>
            <Form.Group >
                <Form.Label className="Label1">
                        Open Weather Map API dostarczy ci najnowszych informacji o pogodzie w wybranym przez ciebie
                        mieście
                </Form.Label>
                <Form.Control className="Form1" size="sm" type="text" value={props.value} onChange={props.change}
                              placeholder="Wpisz miasto"/>
            </Form.Group>
            <Button className="Button1" variant="primary" type="Submit">Wyszukaj miasta</Button>
            <br/>
        </Form>
    )
}

export default Form2