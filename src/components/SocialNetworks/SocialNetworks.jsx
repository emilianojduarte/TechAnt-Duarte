//Componentes
import React from "react";
//Estilos
import './SocialNetworks.css';

function SocialNetworks () {
    return(
        <section className="redes">
            <div className="redes__txt redes__div">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <span></span>Facebook
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <span></span>Twitter
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <span></span>Instagram
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <span></span>YouTube
                </a>
            </div>
        </section>
    )
}

export default SocialNetworks