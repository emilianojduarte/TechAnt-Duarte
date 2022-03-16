import React from "react";
import Button from '@mui/material/Button';
import './NavBar.css';

function NavBar() {
    return(
        <header className="mainHeader">
            <div className="mainHeader__containerLogo">
                <img src="logo.png" className="mainHeader_containerLogo--logo" alt="logo"/>
            </div>
            <div>
                <p className="mainHeader__brand">TechAnt</p>
            </div>
            <ul className="navbar">
                <li><Button variant="outlined" color="primary">Categorías</Button></li>
                <li><Button variant="outlined">Ofertas</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
                <li><Button variant="outlined">Carrito</Button></li>
                <li><Button variant="outlined">Cuenta</Button></li>
            </ul>
        </header>
    )
}
export default NavBar;