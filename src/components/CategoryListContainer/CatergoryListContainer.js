//Componentes
import React from "react";
import CategoryList from "../CategoryList/CategoryList";


function CategoryListContainer(){
    return(
        <div className="mainItemListContainer">
            <h1> Categorías</h1>
            <CategoryList/>
        </div>
    )
}

export default CategoryListContainer;