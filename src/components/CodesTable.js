import React from "react";
import Table from "react-bootstrap/Table";

const CodesTable = (props) => {
    var codeErr = props.codeErr;
    var codes = props.codes;
    var elements = [];
    window.onload=props.check;
    for (var i = 0; i < codes.length; i++) {
            elements.push(
                <tr className="Mid" key={i}>
                    <td>{i+1}</td>
                    <td>{codes[i].code}</td>
                    <td>{codes[i].currency}</td>
                    <td>{codes[i].mid}</td>
                </tr>
            )
    }
    let content = (
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Kod</th>
                <th>Nazwa waluty</th>
                <th>Dzisiejszy kurs</th>
            </tr>
            </thead>
            <tbody>
            {elements}
            </tbody>
        </Table>
    )
    return (codeErr ? 'Ups, nie możemy teraz zobaczyć kodów' : content)
}

export default CodesTable;