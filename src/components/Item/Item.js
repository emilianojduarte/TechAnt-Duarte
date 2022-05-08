//Componentes
import React,{useContext, useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { Button } from '@mui/material';
//Estilos
import './Item.css';

function Item({item}) {
//variables
    const {url, price, stock, title, id} = item;
    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {addProductToCart} = useContext(CartContext);
//funciones
    const onAdd = (e, count) => {
        if(!!e & productQuantity<1){
            setProductQuantity(count);
        }
    }
//useeffect
    useEffect(()=>{
        if(productQuantity>0){
            setMostrarItemCount(false);
            addProductToCart(item, productQuantity);
        }
    },[productQuantity])
//return
    return(
        <div className="cardItem">
            <Link to={`/item/${id}`}>
                <img src={`/assets/images/${url}`} className="cardItem__img" alt="foto del producto"></img>
            </Link>
            <p className='cardItem--price'>
                $ {price}
            </p>
            <p className='cardItem--title'>{title}</p>
            {mostrarItemCount ?(
                <ItemCount stock={stock} initial={1} action={onAdd}/>
                ):( 
                    <Link to="/cart">
                        <Button>Finalizar Compra</Button>
                    </Link>
                )
            }
        </div>
    )
}

export default Item;