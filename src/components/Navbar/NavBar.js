//Componentes
import React,{useContext} from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import navPages from "../../utils/navPages";
import { nanoid } from 'nanoid';
import ThemeSwitch from "./ThemeSwitch";
import ThemeContext from "../../context/ThemeContext";
import { useMediaQuery } from "@mui/material";
//Estilos
import './NavBar.css';



function NavBar() {
    const {lightTheme} = useContext(ThemeContext);
    const isMobile = useMediaQuery('(min-width:760px)');
    return(
        <>
        {isMobile ?(
            <header className={lightTheme ? 'header-light': 'header-dark'}>
                <Link to={'/'}>
                    <div className="brandcontainer">
                        <img src="/assets/images/logo.png" className="brandcontainer--logo" alt="logo"/>
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
                            <li id="iconoUser">
                                <PersonIcon/>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
        ):(
            <header className={lightTheme ? 'header-light': 'header-dark'}>
                <Link to={'/'}>
                    <div className="brandcontainer">
                        <img src="/assets/images/logo.png" className="brandcontainer--logo" alt="logo"/>
                    </div>
                </Link>
                <div className="header__div">
                    <nav className={lightTheme?'nav-light':'nav-dark'}>
                        <ul class="nav-items">
                            <li class="nav-item nav-item-dropdown">
                                <a class="dropdown-trigger" href="#">Menu</a>
                                <ul class="dropdown-menu">
                                    {navPages.map((page)=>{
                                        return(
                                            <li key={nanoid()} className="dropdown-menu-item">
                                                <Link to={page.url}>{page.title}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li>
                                <ThemeSwitch/>
                            </li>
                            <li>
                                <CartWidget/>
                            </li>
                            <li id="iconoUser">
                                <PersonIcon/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )}
        </>
    )
}
export default NavBar;