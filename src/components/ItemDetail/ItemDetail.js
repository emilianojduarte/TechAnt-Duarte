//Componentes
import React,{useState} from "react";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail ({item}){
    const {url, price, stock, description, detail} = item;
    const [contador, setContador] = useState(0);

    const onAdd = (e, count) => {
        setContador(count)
        console.log("el valor de contador es:", contador);
        //por qué no me funciona bien? -Revisar
    }
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

export default ItemDetail;