import React from "react";
import Card from '../Cards/Card';

const ListProducts = () =>{
    let dataProduct = {
        titulo: 'Remera',
        talle: 'XL',
        precio: 2500,
        stock: 15
    }
    return(
        <div>
            <Card data ={dataProduct}/>
        </div>
    )
}

export default ListProducts;