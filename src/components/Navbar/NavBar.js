import React from "react";
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import PersonIcon from '@mui/icons-material/Person';

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
                <li><Button color="secondary">Categorías</Button></li>
                <li><Button color="secondary">Ofertas</Button></li>
                <li><Button color="secondary">Contacto</Button></li>
                <li><CartWidget/></li>
                <li>
                    <Button color="secondary">
                    <PersonIcon/>
                    </Button>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;