//Componentes
import React,{useContext, useEffect, useState} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
//Estilos
import './Cart.css';


function Cart () {
    const {cartProducts, cartTotal, restarUno, addProductToCart, removeItem, cleanCart} = useContext(CartContext);
    const [hayProductos, setHayProductos] = useState(false);
    const [totalDelCart, setTotalDelCart] = useState(cartTotal);
    //funciones
    const handleOneLess = (id) =>{
        restarUno(id);
        setTotalDelCart(cartTotal);
    }
    const handleOneMore = (product, uno) =>{
        addProductToCart(product, uno);
        setTotalDelCart(cartTotal);
    }
    const handleDeleteItem = (id) => {
        removeItem(id);
        setTotalDelCart(cartTotal);
    }
    const handleDeleteCart = () =>{
        cleanCart();
        setTotalDelCart(0);
    }
    //useEffect
    useEffect(()=>{
        if(totalDelCart > 0){
            setHayProductos(true)
        }else{
            setHayProductos(false)
        }
    },[totalDelCart])
    //return
    return(
        <div>
            <h1>Carrito de compras</h1>
            {hayProductos?(
                    <div className="cartConteiner">
                        {cartProducts.map((product)=>{
                            return(
                                <div className="cartConteiner__item" key={nanoid()}>
                                    <div className='cartConteiner__item--img'>
                                        <img src={product.url} className="" alt="foto del producto"></img>
                                    </div>
                                    <div className='cartContiner__item__data'>
                                        <p>{product.description}</p>
                                        <p>Precio unitario: ${product.price}</p>
                                        <p>
                                            <Button onClick={()=>{handleOneLess(product.id)}}>-</Button>
                                            Cantidad: {product.cantidad}
                                            <Button onClick={()=>{handleOneMore(product, 1)}}>+</Button>
                                        </p>
                                        <p>Precio por cantidad (subtotal): ${product.price*product.cantidad}</p>
                                        <p>
                                            <Button onClick={()=>{handleDeleteItem(product.id)}}>Eliminar</Button>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <Button onClick={()=>{handleDeleteCart()}}>Vaciar carrito</Button>
                        </div>
                        <div>
                            <p>Total:{cartTotal()}</p>
                        </div>
                    </div>
                ):(
                    <div>
                        <p>Vaya parece que el carrito está está vacío</p>
                        <p>Que te parece hacer click en el siguiente botón para ver algo?</p>
                        <p>
                            <Link to={'/'}>
                                <Button>Volver a la tienda</Button>
                            </Link>
                        </p>
                    </div>
                )
            }
        </div>
    )
}


export default Cart;