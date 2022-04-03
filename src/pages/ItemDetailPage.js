//Componentes
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";


const ItemDetailPage = () =>{
    const {id} = useParams();
    return(
        <ItemDetailContainer id={id}/>
    )
}

export default ItemDetailPage;