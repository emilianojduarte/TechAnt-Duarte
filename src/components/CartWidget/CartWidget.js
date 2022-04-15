//Componentes
import React,{useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import CartContext from "../../context/CartContext";


function CartWidget(){
    const {cartCantProductos} = useContext(CartContext);
    return(
        <div>
            {console.log("CartWidget. Entro en el render")}
            {console.log("CartWidget. hayProductos:", cartCantProductos())}
            <Link to={'/cart'}>
                    <Badge badgeContent={cartCantProductos()}>
                        <ShoppingCartIcon/>
                    </Badge>
            </Link>
        </div>
    )
}

export default CartWidget;