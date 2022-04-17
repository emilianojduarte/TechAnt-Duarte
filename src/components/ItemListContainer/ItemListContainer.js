//Componentes
import React,{useState,useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import database from "../../services/firebase";
//Estilos
import './ItemListContainer.css';

function ItemListContainer(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const navigate = useNavigate();
    const getProducts = async() => {
        const consulta = ()=> {
            var respuesta;
            if(!!parseInt(id)){
                respuesta = query(collection(database, "Productos"), where("type", "==", parseInt(id)))
            }else{
                if(id === 'recomendados'){
                    respuesta = query(collection(database, "Productos"), where("recomendado", "==", true))
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
    useEffect(()=>{
        getProducts().then((resutladoFiltrado)=>{
            setLoading(false);
            if(resutladoFiltrado.length<1 || resutladoFiltrado===null){
                navigate('/404');
            }else{
                setProductosFiltrados(resutladoFiltrado);
            }
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