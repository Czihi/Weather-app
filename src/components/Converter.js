import React from "react";
const Converter =(props)=> {
    const {firstErr, secondErr, firstCode, secondCode, firstRate, secondRate, amount} = props.convert;
    let content = null;
    if (!firstErr && !secondErr && firstCode && secondCode && firstRate && secondRate) {
        const ans = (amount * firstRate / secondRate).toFixed(4);
        if(isNaN(ans) || ans<0) {
            content=(
                <div>
                    <br/>
                    <h3 className="textResponsive2">Niepoprawna kwota</h3>
                </div>)
        }
    else{
            content = (
                <div>
                    <br/>
                    <h3 className="textResponsive2">{+amount} ({firstCode}) to {+ans} ({secondCode})</h3>
                </div>)
        }
    }
    if (firstErr && secondErr) {
        return (
            <div className="result">
                {`Nie mamy w bazie ani pierwszego kodu (${firstCode}), ani drugiego kodu (${secondCode})`}
            </div>
        );
    }else{
        if(firstErr){
            return(
            <div className="result">
                {`Nie mamy w bazie pierwszego kodu (${firstCode})`}
            </div>
            )
        }
        else{
            if(secondErr){
                return(
                    <div className="result">
                        {`Nie mamy w bazie drugiego kodu (${secondCode})`}
                    </div>
                )
            }
            else{
                return content;
            }
        }
    }

};
export default Converter