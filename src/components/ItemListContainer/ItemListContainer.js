//Componentes
import React,{useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import database from "../../services/firebase";
//Estilos
import './ItemListContainer.css';

function ItemListContainer(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const getProducts = async() => {
        //query con filtro
        const productsCollection = query(collection(database, "Productos"), where("type", "==", parseInt(id)))
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => {
                let product = doc.data();
                product.id = doc.id;
                return product;
            }
        )
        return productsList;
    }
    useEffect(()=>{
        getProducts().then((resutladoFiltrado)=>{
            setLoading(false);
            setProductosFiltrados(resutladoFiltrado);
        })
    },[id])
    return(
        <div className="mainItemListContainer">
            <h1>Listado de Productos</h1>
            {loading?(
                <h2>Cargando...</h2>
            ):(
                <ItemList productosFiltrados={productosFiltrados}/>
            )}
        </div>
    )
}

export default ItemListContainer;