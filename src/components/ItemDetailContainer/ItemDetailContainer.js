import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const mockItem = {
        id: 3,
        type: "ram",
        url: "./assets/images/ram3.jpg",
        enviogratis: true,
        recomendado: true,
        price: 16108,
        stock: 16,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "2x16GB Kingston Fury Beast DDR4"
    }
    const [item, setItem] = useState([]);
    async function getItem () {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (mockItem)}, 2000);
        })
        let result = await promise;
        return (result);
    }
    useEffect(()=>{
        getItem()
        .then((dataitem)=>{
            setItem(dataitem)
        }).finally(()=>{
            console.log("Terminó la llamada al item correctamente")
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