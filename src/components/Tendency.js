import React from 'react'
import rising from '../images/rising.png'
import falling from '../images/falling.png'
import '../css/App.css'
const Tendency = (props)=>{
    let content = null;
    const {currency, rates, ratesLength, err2} = props.nowthen;
    const period=props.period;
    const periodDiff=props.periodDiff;
    let i=ratesLength-1;
    if (!err2 && currency) {
        const diff=+(rates[i].mid - rates[i-periodDiff].mid).toFixed(6);
        if (diff>=0) {
            content = (
                <div>
                    <h3 className="textResponsive">{period} wzrost: {diff}</h3>
                    <img className="Tendency" src={rising} alt="rising"/>
                </div>
            )
        } else {
            content = (
                <div>
                    <h3 className="textResponsive">{period} spadek: {diff}</h3>
                    <img className="Tendency" src={falling} alt="falling"/>
                </div>
            )
        }
    }
    return (
        <div className="tendencyDiv">
            {err2 ? null : content}
        </div>

    );
};

export default Tendency