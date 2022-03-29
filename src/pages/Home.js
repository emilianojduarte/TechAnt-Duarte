import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function HomePage (){
    return(
        <>
        <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
        <ItemDetailContainer/>
        </>
    )
}
export default HomePage;