//Componentes
import React,{useContext, useState, useEffect} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget(){
    const {cartCantProductos} = useContext(CartContext);
    const [hayProductos, setHayProductos] = useState(false);
    const [cantidadProductos, setCantidadProductos] = useState(0);
    //useEffect
    useEffect(()=>{
        setCantidadProductos(cartCantProductos())
        if(cantidadProductos > 0){
            setHayProductos(true)
        }else{
            setHayProductos(false)
        }
    },)
    //return
    return(
            <div>
                <Link to={'/cart'}>
                    <ShoppingCartIcon/>
                </Link>
                {hayProductos?(
                <>
                    {console.log("se renderizo el cartWidget")}
                    <span className="badge">{cantidadProductos}</span>
                </>
            ):(
                <></>
            )}
            </div>
    )
}

export default CartWidget;