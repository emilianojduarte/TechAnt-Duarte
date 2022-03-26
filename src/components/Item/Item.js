import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';


function Item({data}) {
    const {url, price, stock, description} = data;
    return(
        <div className="cardItem">
            <img src={url} className="cardItem__img" alt="foto del producto"></img>
            <p>Precio : $ {price}</p>
            <p>{description}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item;