import React from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";

function ItemListContainer({greeting}){
    return(
        <div className="mainItemListContainer">
            <h1> {greeting} </h1>
            <h2>Productos Destacados</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;