import React from "react";
import Navbar from "react-bootstrap/Navbar";
import TopNavbarContent from "./TopNavbarContent";

const TopNavbar = (props) => {
    let content=(
        <Navbar className="topNavbar" bg="dark" variant="dark">
            <TopNavbarContent
                source='/logo192.png'
                description='Strona główna'
                to='/'
            />
            <TopNavbarContent
                source='/NBP.png'
                description='NBP API'
                to='/currencies'
            />
            <TopNavbarContent
                source='/OWM.png'
                description='Open Weather Map API'
                to={'/weather'}
            />
            <TopNavbarContent
                source='/Czihi.png'
                description='Autor'
                to='/author'
            />


        </Navbar>
    );
return(content)
};

export default TopNavbar