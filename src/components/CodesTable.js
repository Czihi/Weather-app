import React from "react";
import Table from "react-bootstrap/Table";

const CodesTable = (props) => {
    const codeErr = props.codeErr;
    const codes = props.codes;
    let elements = [];
    window.onload=props.check;
    for (let i = 0; i < codes.length; i++) {
            elements.push(
                <tr className="Mid" key={i}>
                    <td>{i+1}</td>
                    <td>{codes[i].code}</td>
                    <td>{codes[i].currency}</td>
                    <td>{codes[i].mid}</td>
                </tr>
            )
    }
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    let day=days[new Date().getDay()];
    if(day==="Niedziela" || day==="Sobota"){
        day="Piątek"
    }

    let content = (
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Kod</th>
                <th>Nazwa waluty</th>
                <th>Ostatni kurs ({day})</th>
            </tr>
            </thead>
            <tbody>
            {elements}
            </tbody>
        </Table>
    );
    return (codeErr ? 'Ups, nie możemy teraz zobaczyć kodów' : content)
};

export default CodesTable;