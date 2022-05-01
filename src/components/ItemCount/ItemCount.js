//Componentes
import React,{useState} from "react";
import Button from '@mui/material/Button';
//Estilos
import './ItemCount.css';

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
        <div className="mainItemDetail__details__counter">
            <div className="mainItemDetail__details__counter--btnCounter">
                <Button onClick={countMinus}>
                    <span>-</span>
                </Button>
                <p>{count}</p>
                <Button onClick={countPlus}>
                    <span>+</span>
                </Button>
            </div>
            <Button onClick={(e) => action(e, count)}>
                Agregar al Carrito
            </Button>
        </div>
        
    )
}

export default ItemCount;