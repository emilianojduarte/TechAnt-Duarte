//Componentes
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function Item({data}) {
    const {url, price, stock, description, id} = data;
    return(
        <div className="cardItem">
            <Link to={`/item/${id}`}>
            <img src={url} className="cardItem__img" alt="foto del producto"></img>
            </Link>
            <p>Precio : $ {price}</p>
            <p>{description}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Item;