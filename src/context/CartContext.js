//Componentes
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
//variables
    const [cartProducts, setCartProducts] = useState([]);
    const [cuantosProductos, setCuantosProductos] = useState();
//funciones
    const addProductToCart = (product, productQuantity) =>{
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })
        if(indiceEncontrado === -1){
            product.cantidad = productQuantity;
            setCartProducts(cartProducts => [...cartProducts, product]);
            cartCantProductos();
        }else{
            if (product.stock < (product.cantidad + productQuantity)){
            }else{
                cartProducts[indiceEncontrado].cantidad += productQuantity;
                cartCantProductos();
            }
        }
    }
    const cartTotal = () => {
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.price*product.cantidad;
        });
        return total
    }
    const cartCantProductos = () => {
        let cantidad = 0;
        for(const producto of cartProducts){
            cantidad = cantidad + producto.cantidad;
        }
        setCuantosProductos(cantidad);
        return cantidad
    }
    const restarUno = (id) => {
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        if(indiceEncontrado === -1){
            return;
        }else{
            if (cartProducts[indiceEncontrado].cantidad>1){
                cartProducts[indiceEncontrado].cantidad -= 1;
                cartCantProductos();
            }
        }
    }
    const removeItem = (id) => {
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        cartProducts.splice(indiceEncontrado, 1);
        cartCantProductos();
    }
    const cleanCart = () => {
        setCartProducts([]);
        cartCantProductos();
    }
//data a exportar
    const data = {
        cartProducts,
        cuantosProductos,
        addProductToCart,
        cartCantProductos,
        cartTotal,
        restarUno,
        removeItem,
        cleanCart
    }
//return
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext