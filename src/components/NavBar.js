import React from "react";
import Button from '@mui/material/Button';


function NavBar() {
    return(
        <header className="mainHeader">
            <div className="mainHeader__containerLogo">
                <img src="logo192.png" className="mainHeader_containerLogo--logo" alt="logo"/>
            </div>
            <ul className="navbar">
                <li><Button variant="outlined">Home</Button></li>
                <li><Button variant="outlined">Productos</Button></li>
                <li><Button variant="outlined">Nosotros</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
            </ul>
        </header>
    )
}
export default NavBar;