import React from "react";
import './ItemListContainer.css';

function ItemListContainer(){
    return(
        <div className="mainItemListContainer">
            <h1> Categorías </h1>
            <h2>Productos Destacados</h2>
            <p>Acá van las cards o listado de productos de esta categoría</p>
            <h2>Pruductos en Oferta</h2>
            <p>Acá van las cards o listado de productos de esta otra categoría</p>
        </div>
    )
}

export default ItemListContainer;