//Componentes
import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import navPages from "../../utils/navPages";
import { nanoid } from 'nanoid';
//Estilos
import './NavBar.css';

function NavBar() {
    return(
        <header>
            <Link to={'/'}>
            <div className="brandcontainer">
                <img src="/assets/images/logo.png" className="brandcontainer--logo" alt="logo"/>
            </div>
            </Link>
            <Link to={'/'}>
            <div>
                <p className="brandname">TechAnt</p>
            </div>
            </Link>
            <div className="header__div">
                <nav>
                    <ul className="header__div">
                        {navPages.map((page)=>{
                            return(
                                <li key={nanoid()}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            )
                        })}
                        <li><CartWidget contador={0}/></li>
                        <li>
                            <PersonIcon/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;