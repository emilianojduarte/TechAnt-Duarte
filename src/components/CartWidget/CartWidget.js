import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget(){
    return(
        <Button color="secondary">
            <ShoppingCartIcon/>
        </Button>
    )
}

export default CartWidget;