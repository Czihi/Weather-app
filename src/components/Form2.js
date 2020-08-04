import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Form2 = (props) => {
    return (
        <Form className="weather-form" onSubmit={props.submit}>
            <Form.Group >
                <Form.Label className="subtitleResponsive">
                        Open Weather Map API dostarczy ci najnowszych informacji o pogodzie w wybranym przez ciebie
                        mieście
                </Form.Label>
                <input  className="inputResponsive" size="sm" type="text" value={props.value} onChange={props.change}
                              placeholder="Wpisz miasto"/>
            </Form.Group>

            <Button className="buttonResponsive" variant="primary" type="Submit">Wyszukaj miasta</Button>
        </Form>
    )
};

export default Form2