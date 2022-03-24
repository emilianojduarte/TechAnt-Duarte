import React from 'react';
import './Card.css';
import ItemCount from '../ItemCount/ItemCount';


function Card({data}) {
    const {titulo, precio, talle, stock} = data;
    return(
        <div className="card-item">
            <h2>{titulo}</h2>
            <p>Precio : $ {precio}</p>
            <p>Talle : {talle}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Card;