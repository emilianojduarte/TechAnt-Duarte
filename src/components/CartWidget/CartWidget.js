//Componentes
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget(){
    return(
        <>
        <ShoppingCartIcon/>
        <span className="badge">0</span>
        </>
    )
}

export default CartWidget;