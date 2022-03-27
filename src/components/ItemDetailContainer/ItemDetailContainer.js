import React from "react";
import './ItemDetailContainer.css';


function ItemDetailContainer(){
    const item = {
        id: 3,
        type: "ram",
        url: "./assets/images/ram3.jpg",
        enviogratis: true,
        recomendado: true,
        price: 16108,
        stock: 16,
        description: "2x16GB Kingston Fury Beast DDR4"
    }

    return(
        <div className="mainItemDetailContainer">
            <h2>Productos Seleccionado</h2>
            
        </div>
    )
}

export default ItemDetailContainer;