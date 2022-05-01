//Componentes
import React from 'react';
import { Link } from 'react-router-dom';
//Estilos
import './Category.css';

function Category({data}) {
    const {id, title, image} = data;
    return(
        <div className="cardCategory">
            <Link to={`/category/${id}`}>
                <img src={`/assets/images/${image}`} className="cardCategory__img" alt="foto del producto"></img>
            </Link>
            <p>{title}</p>
        </div>
    )
}

export default Category;