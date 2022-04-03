//Componentes
import React,{useState, useEffect} from "react";
import Category from '../Category/Category';
import mockCategories from '../../utils/mockCategories';
import { nanoid } from 'nanoid';

const CategoryList = () =>{
    const [categories, setCategories] = useState([]);
    
    const getCatergories = () => {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (mockCategories)}, 2000);
        })
        let result = promise;
        return (result);
    }
    //Efecto de montaje para obteneter el listado de categorias
    useEffect(()=>{
        getCatergories()
        .then((datacategories)=>{
            setCategories(datacategories)
        })
    },[])
    //return JSX
    return(
        <div className="cardsConteiner">
            {categories.map((category)=>{
                return(
                    <Category data={category} key={nanoid()}/>
                )
            })}
        </div>
    )
}

export default CategoryList;