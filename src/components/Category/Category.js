//Componentes
import React from 'react';
import { Link } from 'react-router-dom';

function Category({data}) {
    const {id, title, image} = data;
    return(
        <div className="cardItem">
            <Link to={`/category/${id}`}>
                <img src={image} className="cardItem__img" alt="foto del producto"></img>
            </Link>
            <p>{title}</p>
        </div>
    )
}

export default Category;