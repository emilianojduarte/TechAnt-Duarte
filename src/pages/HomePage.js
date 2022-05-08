//Components
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
//Estilos
import '@splidejs/react-splide/css';
import './HomePage.css';

function HomePage (){
//variables
    const breakPointScreen = useMediaQuery('(max-width:760px)');
    const portraitScreen = useMediaQuery('(orientation: portrait)');
//return
    return(
        <>
        {breakPointScreen&&portraitScreen ?(
            <section>
                <Splide aria-label="Carrousel"
                    options={{
                        width: '100vw',
                        autoplay: true,
                        type  : 'fade',
                        rewind: true,
                        height: '95vh',
                    }}
                >
                    <div className="splide__float">
                        <p>Visitá nuestro catálogo de productos con lo último en tecnología</p>
                        <p>
                            <Button>
                                <Link to={'/category'}>Catálogo</Link>
                            </Button>
                        </p>
                    </div>
                    <SplideSlide>
                        <img src="./assets/images/carrousel1-m.jpg" alt="carrousel 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./assets/images/carrousel2-m.jpg" alt="carrousel 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./assets/images/carrousel3-m.jpg" alt="carrousel 3"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./assets/images/carrousel4-m.jpg" alt="carrousel 4"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="./assets/images/carrousel5-m.jpg" alt="carrousel 5"/>
                    </SplideSlide>
                </Splide>
            </section>
        ):(
            <section>
                <Splide aria-label="Carrousel"
                    options={{
                        width: '100vw',
                        autoplay: true,
                        type  : 'fade',
                        rewind: true,
                        height: '95vh',
                    }}
                >
                    <div className="splide__float">
                        <p>Visitá nuestro catálogo de productos con lo último en tecnología</p>
                        <p>
                            <Button>
                                <Link to={'/category'}>Catálogo</Link>
                            </Button>
                        </p>
                    </div>
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
        )}
        </>
    )
}
export default HomePage;