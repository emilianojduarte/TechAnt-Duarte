//Componentes
import React,{useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import CartContext from "../../context/CartContext";


function CartWidget(){
    const {cuantosProductos} = useContext(CartContext);
    // const [counter, setCounter] = useState(0);
    // useEffect(()=>{
    //     setCounter(cuantosProductos) 
    // },[cuantosProductos])
    return(
        <div>
            <Link to={'/cart'}>
                    <Badge badgeContent={cuantosProductos}>
                        <ShoppingCartIcon/>
                    </Badge>
            </Link>
        </div>
    )
}

export default CartWidget;