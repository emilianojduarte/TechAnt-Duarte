//Componentes
import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import mockProducts from "../../utils/mockProducts";

function ItemDetailContainer({id}){
    
    //Estado para el producto
    const [item, setItem] = useState([]);
    //Promesa para obtener los productos
    const getProducts = () => {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (mockProducts)}, 2000);
        })
        let result = promise;
        return (result);
    }
    //Efecto de montaje para obtener obtener los productos y luego encontrar
    //el producto correcto con un find
    useEffect(()=>{
        getProducts()
        .then((dataList)=>{
            const encontrado = dataList.find(element => element.id == id)
            setItem(encontrado);
        })
    })
    return(
        <div className="mainItemDetailContainer">
            <h2>Productos Seleccionado (detalles)</h2>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;