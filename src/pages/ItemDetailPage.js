//Componentes
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";


const ItemDetailPage = () =>{
//variables
    const {id} = useParams();
//return
    return(
        <ItemDetailContainer id={id}/>
    )
}

export default ItemDetailPage;