import React,{useState} from "react";
import Card from '../Cards/Card';

const ListProducts = ({children}) =>{
    let dataProduct = {
        titulo: 'Remera',
        talle: 'XL',
        precio: 2500,
        stock: 15
    }
    return(
        <div>
            <h2>{children}</h2>
            <Card data ={dataProduct}/>
        </div>
    )
}

export default ListProducts;