import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ResultNBP = props => {
    function show() {
        var list = document.getElementById("lista");
        var button = document.getElementById("showRates");
        if (list.style.display !== "table") {
            list.style.display = "table";
            button.innerText = "Ukryj kursy z poprzednich dni"
        } else {
            list.style.display = "none";
            button.innerText = "Pokaż kursy z poprzednich dni"
        }
    }

    const {currency, currencyName, date, rates, ratesLength, err} = props.currencies
    const time = new Date().toLocaleDateString();
    let content = null;
    var elements = [];
    var index = 0;
    for (var i = ratesLength - 2; i >= 0; i--) {
        index++;
        elements.push(<tr className="Mid" key={index}>
            <td>{index+1}</td>
            <td>{rates[i].effectiveDate} </td>
            <td>{rates[i].mid}</td>
        </tr>);
    }
    if (!err && currency) {
        content = (
            <div><h3>Kursy dla: {currency}</h3>
                <div><h4>Data i czas zapytania: {time} {date}</h4></div>
                <div><h4>Ostatnie kursy dla: {currencyName}</h4></div>
                <div className="Mid" key={index}><h4>Data: {rates[ratesLength - 1].effectiveDate} średni
                    kurs: {rates[ratesLength - 1].mid}</h4></div>
                <Button id="showRates" onClick={show}>Pokaż kursy z poprzednich dni</Button>
                <br/>
                <br/>
                <Table id="lista" className="List" striped bordered hover size="sm" variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Data</th>
                        <th>Kurs</th>
                    </tr>
                    </thead>
                    <tbody>
                    {elements}
                    </tbody>
                </Table>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${currency}` : content}
        </div>

    );
};

export default ResultNBP