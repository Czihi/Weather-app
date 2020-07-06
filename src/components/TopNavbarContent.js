import React, { useLayoutEffect, useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import czihi from "../images/Czihi.png"
import home from "../images/logo192.png"
import nbp from "../images/NBP.png"
import omw from "../images/OWM.png"

function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const TopNavbarContent=(props)=>{
    const width = useWindowSize();
    var description=props.description;
    let iconObj =
        {"czihi": czihi, "home": home, "nbp": nbp, "omw": omw}
    if(width<900){
        description=""
    }
    let content=(
        <Link to={props.to}>
        <Navbar.Brand id="test">
            <img
                alt={props.description}
                src={iconObj[props.source]}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            {description}
        </Navbar.Brand>
        </Link>
    );
    return content
};
export default TopNavbarContent;