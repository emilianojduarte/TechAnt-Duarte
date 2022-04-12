//Componentes
import React,{useState, useEffect} from "react";
import Category from '../Category/Category';
import mockCategories from '../../utils/mockCategories';
import { nanoid } from 'nanoid';

const CategoryList = () =>{
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getCatergories = () => {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (mockCategories)}, 2000);
        })
        let result = promise;
        return (result);
    }
    //Efecto de montaje para obteneter el listado de categorias
    useEffect(()=>{
        getCatergories().then((datacategories)=>{
            setLoading(false);
            setCategories(datacategories)
        })
    },[])
    //return JSX
    return(
        <div className="cardsConteiner">
            {loading?(
                <h2>Cargando...</h2>
            ):(
                <>
                {categories.map((category)=>{
                return(
                    <Category data={category} key={nanoid()}/>
                )
            })}
                </>
            )
            }
        </div>
    )
}

export default CategoryList;