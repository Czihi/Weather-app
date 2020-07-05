import React from "react";
import Navbar from "react-bootstrap/Navbar";
import TopNavbarContent from "./TopNavbarContent";



const TopNavbar = (props) => {
    let content=(
        <Navbar className="topNavbar" bg="dark" variant="dark">
            <TopNavbarContent
                source='home'
                description='Strona główna'
                to='/'
            />
            <TopNavbarContent
                source='nbp'
                description='NBP API'
                to='/currencies'
            />
            <TopNavbarContent
                source='omw'
                description='Open Weather Map API'
                to={'/weather'}
            />
            <TopNavbarContent
                source='czihi'
                description='Autor'
                to='/author'
            />


        </Navbar>
    );
return(content)
};


export default TopNavbar