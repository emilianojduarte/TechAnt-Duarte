//Componentes
import React,{useState} from "react";
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial, action}) => {
    const [count, setCount] = useState(initial);
    const countPlus = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const countMinus = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div className="btnCounter">
            <Button onClick={countMinus}>-</Button>
            <p>{count}</p>
            <Button onClick={countPlus}>+</Button>
            </div>
            <Button onClick={(e) => action(e, count)}>Agregar al Carrito</Button>
        </div>
        
    )
}

export default ItemCount;