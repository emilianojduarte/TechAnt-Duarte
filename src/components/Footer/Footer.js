//Componentes
import React from "react";
import { Link } from "react-router-dom";
//Estilos
import './Footer.css';


function Footer() {
    return(
        <footer>
            <div>Ayuda</div>
            <div>
                <Link to={'/contact'}>
                    Contacto
                </Link>
            </div>
            <div>
                <Link to={'/aboutus'}>
                    Acerca de Nosotros
                </Link>
            </div>
            <div>Trabajá con Nosotros</div>
            <div>
                <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor" target={"_blank"} rel="noreferrer">
                    Defensa al Consumidor
                </a>
            </div>
        </footer>
    )
}

export default Footer;