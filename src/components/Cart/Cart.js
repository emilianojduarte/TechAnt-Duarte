//Componentes
import React,{useContext} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
//Estilos
import './Cart.css';


function Cart () {
    const {cartProducts, cartTotal, cartLength, restarUno, addProductToCart} = useContext(CartContext);
    //funciones
    const carritoConProductos = () =>{
        if(cartLength>0){
            return true
        }else{
            return false
        }
    }
    //return
    return(
        <div>
            <h1>Carrito de compras</h1>
            {carritoConProductos?(
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
                                            <Button onClick={()=>{restarUno(product.id)}}>-</Button>
                                            Cantidad: {product.cantidad}
                                            <Button onClick={()=>{addProductToCart(product, 1)}}>+</Button>
                                        </p>
                                        <p>Precio por cantidad (subtotal): ${product.price*product.cantidad}</p>
                                    </div>
                                </div>
                            )
                        })}
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