import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    const [cuantosProductos, setCuantosProductos] = useState();
    //funciones
    const addProductToCart = (product, productQuantity) =>{
        //reviso si ya existe el producto en el carrito
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })//si no existe lo agrego
        if(indiceEncontrado === -1){
            product.cantidad = productQuantity;
            setCartProducts(cartProducts => [...cartProducts, product]);
            setCuantosProductos(cartCantProductos());
        }else{//si no, valido que no se quiera agrega más de lo que hay en stock
            if (product.stock < (product.cantidad + productQuantity)){
            }else{//si da el stock, sumo
                cartProducts[indiceEncontrado].cantidad += productQuantity;
                setCuantosProductos(cartCantProductos());
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
    const cartCantProductos = () => {
        let cantidad = 0;
        for(const producto of cartProducts){
            cantidad = cantidad + producto.cantidad;
        }
        return cantidad
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
            if (cartProducts[indiceEncontrado].cantidad>1){
                cartProducts[indiceEncontrado].cantidad -= 1;
                setCuantosProductos(cartCantProductos());
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
        setCuantosProductos(cartCantProductos());
    }
    const cleanCart = () => {
        setCartProducts([]);
        setCuantosProductos(cartCantProductos());
    }
    //data a exportar
    const data = {
        cartProducts,
        cuantosProductos,
        addProductToCart,
        cartCantProductos,
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