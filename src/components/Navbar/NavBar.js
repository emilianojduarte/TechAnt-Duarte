//Componentes
import React,{useContext} from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import UserWidget from "../UserWidget/UserWidget";
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
                <nav className={lightTheme?'nav-light':'nav-dark'}>
                    <ul>
                        <li>
                            <ThemeSwitch/>
                        </li>
                        {navPages.map((page)=>{
                            return(
                                <li key={nanoid()}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            )
                        })}
                        <li>
                            <CartWidget/>
                        </li>
                        <li id="iconoUser">
                            <UserWidget/>
                        </li>
                    </ul>
                </nav>
        </header>
        ):(
            <header className={lightTheme ? 'header-light': 'header-dark'}>
                <Link to={'/'}>
                    <div className="brandcontainer">
                        <img src="/assets/images/logo.png" className="brandcontainer--logo" alt="logo"/>
                    </div>
                </Link>
                <nav className={lightTheme?'nav-light':'nav-dark'}>
                    <ul className="nav-items">
                        <li>
                            <ThemeSwitch/>
                        </li>
                        <li className="nav-item nav-item-dropdown">
                            <a className="dropdown-trigger" href="#">Menu</a>
                            <ul className="dropdown-menu">
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
                            <CartWidget/>
                        </li>
                        <li id="iconoUser">
                            <UserWidget/>
                        </li>
                    </ul>
                </nav>
            </header>
        )}
        </>
    )
}
export default NavBar;