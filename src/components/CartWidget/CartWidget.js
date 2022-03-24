import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({contador}){
    return(
        <Button color="secondary">
                <ShoppingCartIcon/>
                <span>{contador}</span>
        </Button>
    )
}

export default CartWidget;