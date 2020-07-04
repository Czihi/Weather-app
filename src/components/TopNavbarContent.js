import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

const TopNavbarContent=(props)=>{
    let content=(
        <Link to={props.to}>
        <Navbar.Brand>
            <img
                alt={props.description}
                src={window.location.origin + props.source}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            {props.description}
        </Navbar.Brand>
        </Link>
    );
    return content
};
export default TopNavbarContent;