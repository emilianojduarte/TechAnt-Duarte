//Componentes
import React,{useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import CartContext from "../../context/CartContext";


function CartWidget(){
//variables
    const {cartCantProductos} = useContext(CartContext);
//return
    return(
        <div>
            <Link to={'/cart'}>
                    <Badge id="iconoCart" badgeContent={cartCantProductos()}>
                        <ShoppingCartIcon/>
                    </Badge>
            </Link>
        </div>
    )
}

export default CartWidget;