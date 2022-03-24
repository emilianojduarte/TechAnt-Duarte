import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

function CartWidget({contador}){
    return(
        <Button color="secondary">
                <ShoppingCartIcon/>
                <span className="badge">{contador}</span>
        </Button>
    )
}

export default CartWidget;