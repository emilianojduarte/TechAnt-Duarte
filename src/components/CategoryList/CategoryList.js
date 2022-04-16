//Componentes
import React from "react";
import Category from '../Category/Category';
import { nanoid } from 'nanoid';

const CategoryList = ({categories}) =>{
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