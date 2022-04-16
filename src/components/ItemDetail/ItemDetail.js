//Componentes
import React,{useEffect, useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";
//Estilos
import './ItemDetail.css';

function ItemDetail ({item}){
    //variables
    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {addProductToCart} = useContext(CartContext);
    //funciones
    const onAdd = (e, count) => {
        if(!!e & productQuantity<1){
            setProductQuantity(count);
        }
    }
    useEffect(()=>{
        if(productQuantity>0){
            setMostrarItemCount(false);
            addProductToCart(item, productQuantity);
        }
    },[productQuantity])
    //return
    return(
        <div className="mainItemDetail">
                <div className="mainItemDetail__img">
                    <img src={`/assets/images/${item.url}`} alt="foto del producto"></img>
                </div>
                <div className="mainItemDetail__details">
                    <p>{item.description}</p>
                    <p>Precio : $ {item.price}</p>
                    <p>{item.detail}</p>
                    {mostrarItemCount ?(
                        <ItemCount stock={item.stock} initial={1} action={onAdd}/>
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