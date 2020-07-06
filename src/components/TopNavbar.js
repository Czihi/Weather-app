import React from "react";
import Navbar from "react-bootstrap/Navbar";
import TopNavbarContent from "./TopNavbarContent";



const TopNavbar = (props) => {
    let content=(
        <Navbar className="topNavbar" bg="dark" variant="dark">
            <TopNavbarContent
                source='home'
                description='Strona główna'
                to='/Weather-app'
            />
            <TopNavbarContent
                source='nbp'
                description='Narodowy Bank Polski API'
                to='/Weather-app/currencies'
            />
            <TopNavbarContent
                source='omw'
                description='Open Weather Map API'
                to={'/Weather-app/weather'}
            />
            <TopNavbarContent
                source='czihi'
                description='Autor'
                to='/Weather-app/author'
            />


        </Navbar>
    );
return(content)
};


export default TopNavbar