//Componentes
import React,{useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import database from "../../services/firebase";
//Estilos
import './ItemListContainer.css';

function ItemListContainer(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [title, setTitle] = useState('Cadena vacia');
    const navigate = useNavigate();
//Funciones
    const getProducts = async() => {
        const consulta = ()=> {
            var respuesta;
            if(!!parseInt(id)){
                respuesta = query(collection(database, "Productos"), where("category", "==", parseInt(id)));
            }else{
                if(id === 'recomendados'){
                    respuesta = query(collection(database, "Productos"), where("recomendado", "==", true));
                }else{
                    navigate('/404')
                }
            }
            return respuesta
        }
        const productsCollection = consulta();
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => {
                let product = doc.data();
                product.id = doc.id;
                return product;
            }
        )
        return productsList;
    }
//useEffect
    useEffect(()=>{
        getProducts()
            .then((resutladoFiltrado)=>{
                if(resutladoFiltrado.length<1 || resutladoFiltrado===null){
                    navigate('/404');
                }else{
                    setProductosFiltrados(resutladoFiltrado);
                    setLoading(false);
                }
            });
        if(productosFiltrados.length>0 && !!parseInt(id)){
            setTitle(productosFiltrados[0].categoryTitle);
        }else{
            if(id === 'recomendados'){
                setTitle('Productos Recomendados')
            }else{
                setTitle('Productos no encontrados')
            }
        }
    },[id, loading])
//return
    return(
        <div className="mainItemListContainer">
            
            {loading?(
                <h2><CircularProgress sx={{ color: 'grey.800' }}/></h2>
            ):(
                <>
                    <h1>{title}</h1>
                    <ItemList productosFiltrados={productosFiltrados}/>
                </>
            )}
        </div>
    )
}

export default ItemListContainer;