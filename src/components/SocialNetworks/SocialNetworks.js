//Componentes
import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
//Estilos
import './SocialNetworks.css';

function SocialNetworks () {
    return(
        <section className="redes">
            <div className="redes__txt redes__div">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <span className="redes__div--muiIcon">
                        <FacebookOutlinedIcon/>
                    </span>Facebook
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <span className="redes__div--muiIcon">
                        <TwitterIcon/>
                    </span>Twitter
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <span className="redes__div--muiIcon">
                        <InstagramIcon/>
                    </span>Instagram
                </a>
            </div>
            <div className="redes__txt redes__div">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <span className="redes__div--muiIcon">
                        <YouTubeIcon/>
                    </span>YouTube
                </a>
            </div>
        </section>
    )
}

export default SocialNetworks;