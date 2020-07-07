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
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const {currency, currencyName, date, rates, ratesLength, err2} = props.currencies
    const time = new Date().toLocaleDateString();
    let content = null;
    var elements = [];
    var index = 0;
    var today=days[new Date().getDay()];
    var div=null
    for (var i = ratesLength - 2; i >= 0; i--) {
        index++;
        var dat = days[new Date(rates[i].effectiveDate).getDay()];
        elements.push(<tr className="Mid" key={index}>
            <td>{index}</td>
            <td>{dat}</td>
            <td>{rates[i].effectiveDate} </td>
            <td>{rates[i].mid}</td>
        </tr>);
    }
    if(ratesLength>0){
        var firstDate=days[new Date(rates[ratesLength - 1].effectiveDate).getDay()]
    }
    if(today==="Sobota" || today==="Niedziela"){
        div=(
            <div><h4 className="textResponsive2">Narodowy Bank Polski API nie udostępnia sobotnich i niedzielnych kursów. Ostatni dostępny kurs:</h4></div>)
    }

    if (!err2 && currency) {
        content = (
            <div><h4 className="textResponsive2">Kursy dla: {currency}</h4>
                <div><h5 className="textResponsive2">Data i czas zapytania: {date} ({today}) {time}</h5></div>
                <div><h5 className="textResponsive2">Ostatni kurs dla: {currencyName}</h5></div>
                {div}
                <div key={index}><h5 className="textResponsive2">Data: {rates[ratesLength - 1].effectiveDate} ({firstDate})</h5></div>
                <div><h3 className="textResponsive2">Średni kurs: {rates[ratesLength - 1].mid}</h3></div>
                <Button className="buttonResponsive" id="showRates" onClick={show}>Pokaż kursy z poprzednich dni</Button>
                <br/>
                <br/>
                <Table id="lista" className="List" striped bordered hover size="sm" variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Dzień tygodnia</th>
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
            {err2 ? `Nie mamy w bazie ${currency}` : content}
        </div>

    );
};

export default ResultNBP