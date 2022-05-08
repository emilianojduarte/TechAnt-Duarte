//Componentes
import React from "react";
import Item from '../Item/Item';
import { nanoid } from 'nanoid';
//Estilos
import './ItemList.css';

const ItemList = ({productosFiltrados}) =>{
//return
    return(
        <div className="cardsConteiner">
            {productosFiltrados.map((product)=>{
                return(
                    <Item item={product} key={nanoid()}/>
                )
            })}
        </div>
    )
}

export default ItemList;