//Componentes
import React,{ useEffect, useState} from "react";
import CategoryList from "../CategoryList/CategoryList";
import { collection, getDocs } from "firebase/firestore";
import database from "../../services/firebase";
import CircularProgress from '@mui/material/CircularProgress';
//Estilos
import './CategoryListContainer.css';

function CategoryListContainer(){
//variables
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
//funciones
    const getCategories = async() => {
        const categoriesCollection = collection(database, "Categorias")
        const categoriesSnapshot = await getDocs(categoriesCollection)
        const categoriesList = categoriesSnapshot.docs.map((doc)=>{
            let category = doc.data();
            category.id = doc.id;
            return category;
            }
        )
        return categoriesList;
    }
//useEffect
    useEffect(()=>{
        getCategories().then((resultado)=>{
            setLoading(false);
            setCategories(resultado)
        })
    },[])
//return
    return(
        <div className="mainItemListContainer">
            <h1>Categorías</h1>
            {
                loading?(
                    <h2><CircularProgress sx={{ color: 'grey.800' }}/></h2>
                ):(
                    <CategoryList categories={categories}/>
                )
            }
        </div>
    )
}

export default CategoryListContainer;