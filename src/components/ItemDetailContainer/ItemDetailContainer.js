//Componentes
import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
//Firebase
import { doc, getDoc } from "firebase/firestore";
import database from "../../services/firebase";
//Estilos
import './ItemDetailContainer.css';

function ItemDetailContainer(){
//variables
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
//funciones
    const getProducts = async() => {
        const docRef = doc(database, 'Productos', id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            let item = docSnap.data();
            item.id = docSnap.id;
            setItem(item);
        }else{
            navigate('/404');
        }
    }
//useeffect
    useEffect(()=>{
        getProducts().then(()=>{
            setLoading(false);
        })
    },[id])
//return
    return(
        <div className="mainItemDetailContainer">
            <h1>{item.title}</h1>
            {loading?(
                <h2><CircularProgress sx={{ color: 'grey.800' }}/></h2>
            ):(
                <ItemDetail item={item}/>
            )}
        </div>
    )
}

export default ItemDetailContainer;