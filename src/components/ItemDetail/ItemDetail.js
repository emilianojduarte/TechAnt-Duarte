//Componentes
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail ({item}){
    const {url, price, stock, description, detail} = item;
    return(
        <div className="mainItemDetail">
            <div className="mainItemDetail__img">
                <img src={url} alt="foto del producto"></img>
            </div>
            <div className="mainItemDetail__details">
                <p>{description}</p>
                <p>Precio : $ {price}</p>
                <p>{detail}</p>
                <ItemCount stock={stock} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail;