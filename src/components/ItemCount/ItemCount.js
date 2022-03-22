import React,{useState} from "react";
import './ItemCount.css';
import Button from '@mui/material/Button';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    const onAdd = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const onRemove = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div className="btnCounter">
            <Button onClick={onRemove}>-</Button>
            <p>{count}</p>
            <Button onClick={onAdd}>+</Button>
        </div>
    )
}

export default ItemCount;