//Componentes
import React,{useContext} from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import navPages from "../../utils/navPages";
import { nanoid } from 'nanoid';
import ThemeSwitch from "./ThemeSwitch";
import ThemeContext from "../../context/ThemeContext";
//Estilos
import './NavBar.css';

function NavBar() {
    const {lightTheme} = useContext(ThemeContext);
    return(
        <header className={lightTheme ? 'header-light': 'header-dark'}>
            <Link to={'/'}>
            <div className="brandcontainer">
                <img src="/assets/images/logo.png" className="brandcontainer--logo" alt="logo"/>
            </div>
            </Link>
            <Link to={'/'}>
            <div>
                <p className={`brandname ${lightTheme?'brandname-light':'brandname-dark'}`}>TechAnt</p>
            </div>
            </Link>
            <div className="header__div">
                <nav className={lightTheme?'nav-light':'nav-dark'}>
                    <ul>
                        {navPages.map((page)=>{
                            return(
                                <li key={nanoid()}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <ThemeSwitch/>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
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