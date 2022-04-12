import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    //funciones
    const addProductToCart = (product, productQuantity) =>{
        //reviso si ya existe el producto en el carrito
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })//si no existe lo agrego
        if(indiceEncontrado === -1){
            product.cantidad = productQuantity;
            setCartProducts(cartProducts => [...cartProducts, product]);
        }else{//si no, valido que no se quiera agrega más de lo que hay en stock
            if (product.stock < (product.cantidad + productQuantity)){
            }else{//si da el stock, sumo
                cartProducts[indiceEncontrado].cantidad += productQuantity;
            }
        }
    }
    const cartTotal = () => {
        //precio total de los productos en el carrito considerando sus cantidades
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.price*product.cantidad;
        });
        return total
    }
    const cartLength = () => {
        //saber el largo del array para el cartwidget
        let largo = cartProducts.length;
        return largo
    }
    const restarUno = (id) => {
        //primero ubico el indice del producto dentro del array
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        if(indiceEncontrado === -1){
            return;
        }else{
            //para que reste solo hasta 0 y no aparezcan números negativos
            if (cartProducts[indiceEncontrado].cantidad>0){
                cartProducts[indiceEncontrado].cantidad -= 1;
            }
        }
    }
    const removeItem = (id) => {
        //primero ubico el indice del producto dentro del array
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        //luego elimino ese producto utilizando el indice encontrado, con splice
        cartProducts.splice(indiceEncontrado, 1);
    }
    const cleanCart = () => {
        setCartProducts([]);
    }
    //data a exportar
    const data = {
        cartProducts,
        addProductToCart,
        cartLength,
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