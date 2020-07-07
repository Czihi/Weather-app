import React from "react";
const Converter =(props)=> {
    const {firstErr, secondErr, firstCode, secondCode, firstRate, secondRate} = props.convert
    let content = null;
    if (!firstErr && !secondErr && firstCode && secondCode && firstRate && secondRate) {
        var ans = (firstRate / secondRate).toFixed(4)
        content = (
            <div>
                <br/>
                <h3 className="textResponsive2">Jeden ({firstCode}) to {ans} ({secondCode})</h3>
            </div>)
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