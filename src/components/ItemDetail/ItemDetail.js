//Componentes
import React,{useEffect, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Estilos
import './ItemDetail.css';

function ItemDetail ({item}){
    //variables
    const {url, price, stock, description, detail} = item;
    const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    //funciones
    const onAdd = (e, count) => {
        if(!!e & contador<1){
            setContador(count);
        }
    }
    useEffect(()=>{
        if(contador>0){
            setMostrarItemCount(false);
            console.log("el valor de contador es:", contador);
        }
    },[contador])
    //return
    return(
        <div className="mainItemDetail">
                <div className="mainItemDetail__img">
                    <img src={url} alt="foto del producto"></img>
                </div>
                <div className="mainItemDetail__details">
                    <p>{description}</p>
                    <p>Precio : $ {price}</p>
                    <p>{detail}</p>
                    {mostrarItemCount ?(
                        <ItemCount stock={stock} initial={1} action={onAdd}/>
                        ):( <Link to="/cart">
                                <Button>Finalizar Compra</Button>
                            </Link>
                        )
                    }
                    
                </div>
        </div>
    )
}

export default ItemDetail;