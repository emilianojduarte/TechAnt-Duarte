//Componentes
import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import database from "../../services/firebase";
import { useParams, useNavigate } from 'react-router-dom';

function ItemDetailContainer(){
    //variables
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    //Promesa para obtener los productos
    const getProducts = async() => {
        const docRef = doc(database, 'Productos', id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            let item = docSnap.data();
            item.id = docSnap.id;
            setItem(item);
        }else{
             //si no existe el producto, deriva al error 404
            navigate('/404');
        }
    }
    //Efecto de montaje para obtener obtener los productos y luego encontrar
    //el producto correcto con un find
    useEffect(()=>{
        getProducts().then(()=>{
            setLoading(false);
        })
    },[id])
    return(
        <div className="mainItemDetailContainer">
            <h2>Productos Seleccionado (detalles)</h2>
            {loading?(
                <h2>Cargando...</h2>
            ):(
                <ItemDetail item={item}/>
            )}
        </div>
    )
}

export default ItemDetailContainer;