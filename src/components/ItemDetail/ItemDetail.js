//Componentes
import React,{useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';

function ItemDetail ({item}){
    const {url, price, stock, description, detail} = item;
    const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const onAdd = (e, count) => {
        e.stopPropagation()
        setContador(count);
        console.log("el valor de contador es:", contador);
        setMostrarItemCount(false);
    }

    const mostraContenido = () => {
        if (mostrarItemCount === true){
        console.log("mostrar cual es true")
        return(
            <div className="mainItemDetail">
                <div className="mainItemDetail__img">
                    <img src={url} alt="foto del producto"></img>
                </div>
                <div className="mainItemDetail__details">
                    <p>{description}</p>
                    <p>Precio : $ {price}</p>
                    <p>{detail}</p>
                    <ItemCount stock={stock} initial={1} action={onAdd}/>
                </div>
            </div>
        )
    }
    else{
        console.log("mostrar cual es false")
        return(
            <div className="mainItemDetail">
                <div className="mainItemDetail__img">
                    <img src={url} alt="foto del producto"></img>
                </div>
                <div className="mainItemDetail__details">
                    <p>{description}</p>
                    <p>Precio : $ {price}</p>
                    <p>{detail}</p>
                    <Button>Finalizar Compra</Button>
                </div>
            </div>
        )
    }
    }
    useEffect(()=>{
        mostraContenido();
    },[mostrarItemCount])

    return(
        <>
        {mostraContenido}
        </>
        
    )
}

export default ItemDetail;