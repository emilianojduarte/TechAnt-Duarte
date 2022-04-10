//Componentes
import React,{useContext, useEffect, useState} from 'react';
import CartContext from '../../context/CartContext';
import { nanoid } from 'nanoid';
//Estilos
import './Cart.css';

function Cart () {
    const {cartProducts, cartTotal} = useContext(CartContext);
    return(
        //Todo esto es a modo de prueba, para ver que levanten correctamente los datos
        <div>
            <h1>Placeholder del carrito</h1>
            <h2>prueba para ver que el cartContext funciona correctamente</h2>
            <div className="cardsConteiner">
                {cartProducts.map((product)=>{
                    return(
                        <div className="cardItem" key={nanoid()}>
                            <img src="" className="cardItem__img" alt="foto del producto"></img>
                            <p>Cantidad: {product.cantidad}</p>
                            <p>Precio unitario: {product.price}</p>
                            <p>Precio por cantidad (subtotal): $ {product.price*product.cantidad}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>Total:{cartTotal()}</p>
            </div>
        </div>
    )
}


export default Cart;