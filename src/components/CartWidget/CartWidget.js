//Componentes
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({contador}){
    return(
        <>
        <ShoppingCartIcon/>
        <span className="badge">{contador}</span>
        </>
    )
}

export default CartWidget;