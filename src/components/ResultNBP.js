import React from 'react'
import Button from 'react-bootstrap/Button';

const ResultNBP = props => {
    function show() {
        var list = document.getElementById("lista")
        var button = document.getElementById("showRates")
        if (list.style.display !== "block") {
            list.style.display = "block";
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
        elements.push(<div className="Mid" key={index}>Data: {rates[i].effectiveDate} średni
            kurs: {rates[i].mid}</div>);
    }
    if (!err && currency) {
        content = (
            <div>Kursy dla: {currency}
                <div>Data i czas zapytania: {time} {date}</div>
                <div>Ostatnie kursy dla: {currencyName}</div>
                <div className="Mid" key={index}>Data: {rates[ratesLength - 1].effectiveDate} średni
                    kurs: {rates[ratesLength - 1].mid}</div>
                <div id="lista" className="List">{elements}</div>
                <Button id="showRates" onClick={show}>Pokaż kursy z poprzednich dni</Button>
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