import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";

function ItemListContainer({greeting}){
    return(
        <div className="mainItemListContainer">
            <h1> {greeting} </h1>
            <h2>Productos Destacados</h2>
            <ItemList/>
            <h2>Pruductos en Oferta</h2>
            <p>Acá van las cards o listado de productos de esta otra categoría</p>
        </div>
    )
}

export default ItemListContainer;