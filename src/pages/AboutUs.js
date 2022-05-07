//Components
import React from "react";
//Estilos
import './AboutUs.css';

function AboutUs () {
    return(
        <section className="sectionAboutUs">
            <h1>Nosotros</h1>
            <div className="sectionAboutUs__div">
                <h2>Nuestra mision</h2>
                <div className="sectionAboutUs__div__info">
                    <div className="sectionAboutUs__div__info--text">
                        <p>
                            Somos TechAndt, un pequeño pero motivado negocio que se especializa en producto de informática.
                            Creemos fervientemente en las grande ofertas y excelente servicio, es por ello que nuestro compromiso es darte lo mejor ambos.
                        </p>
                        <p>
                            Si estas buscando algo nuevo, estás en el lugar correcto.
                            Nos esforzamos en mantenernos laboriosos e innovadores, ofrenciendo a nuestros clientes lo que ellos quieren, colocando sus deseas a la cabeza de nuestra lista de prioridades.
                        </p>
                    </div>
                    <div className="sectionAboutUs__div__info--img">
                        <img src="/assets/images/aboutus-img.jpg" alt="foto mostrando tecnología sobre escritorio"/>
                    </div>
                </div>
                <h2>Nuestro Objetivo</h2>
                <div className="sectionAboutUs__div__info" id="aboutus-div-2">
                    <div className="sectionAboutUs__div__info--text">
                        <p>
                            Nuestros clientes son nuestra mayor prioridad, y a través de nuestros productos, trabajamos duramente en formar una relación a largo plazo con ellos.
                        </p>
                    </div>
                    <div className="sectionAboutUs__div__info--img">
                        <img src="/assets/images/aboutus-img2.jpg" alt="foto mostrando un celular"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;