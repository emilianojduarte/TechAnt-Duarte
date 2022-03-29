//Componentes
import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
//estilos
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
                <li><Button color="secondary">
                    <Link to={'/'}>Home</Link>
                </Button></li>
                <li><Button color="secondary">Categorías</Button></li>
                <li><Button color="secondary">Ofertas</Button></li>
                <li><Button color="secondary">Contacto</Button></li>
                <li><CartWidget contador={0}/></li>
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