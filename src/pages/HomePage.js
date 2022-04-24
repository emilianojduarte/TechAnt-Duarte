//Components
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
//Estilos
import '@splidejs/react-splide/css';
import './HomePage.css';

function HomePage (){
    return(
        <div>
            <section>
            <Splide aria-label="Carrousel"
                options={{
                    width: '100vw',
                    autoplay: true,
                    type  : 'fade',
                    rewind: true,
                }}
            >
                <SplideSlide>
                    <img src="./assets/images/carrousel1.jpg" alt="carrousel 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/images/carrousel2.jpg" alt="carrousel 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/images/carrousel3.jpg" alt="carrousel 3"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/images/carrousel4.jpg" alt="carrousel 4"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./assets/images/carrousel5.jpg" alt="carrousel 5"/>
                </SplideSlide>
            </Splide>
            </section>
            <h1>Bienvenidos a la tienda</h1>
            <div>
                <h2>otro placerholder</h2>
            </div>
        </div>
    )
}
export default HomePage;