//Componentes
import React from "react";
import ItemList from "../ItemList/ItemList";
//Estilos
import './ItemListContainer.css';

function ItemListContainer(){
    return(
        <div className="mainItemListContainer">
            <h1>Listado de Productos</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;