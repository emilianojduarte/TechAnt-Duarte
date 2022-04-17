//Componentes
import React,{useContext, useEffect, useState} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
import ModalBase from '../Modal/ModalBase';
import database from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
//Estilos
import './Cart.css';


function Cart () {
    const {cartProducts, cartTotal, restarUno, addProductToCart, removeItem, cleanCart} = useContext(CartContext);
    const [fechaDeHoy] = useState (() => {
        var fecha = new Date()
        var hoy = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
        return hoy
    })
    const [hayProductos, setHayProductos] = useState(false);
    const [totalDelCart, setTotalDelCart] = useState(cartTotal);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct)=>{
                return{
                    id: cartProduct.id,
                    title: cartProduct.description,
                    price: cartProduct.price
                }
            }),
            date : fechaDeHoy,
            total: cartTotal()
        }
    );
    const [finishedOrder, setFinishedOrder] = useState();
    //funciones
    const handleOneLess = (id) =>{
        restarUno(id);
        setTotalDelCart(cartTotal);
    }
    const handleOneMore = (product, uno) =>{
        addProductToCart(product, uno);
        setTotalDelCart(cartTotal);
    }
    const handleDeleteItem = (id) => {
        removeItem(id);
        setTotalDelCart(cartTotal);
    }
    const handleDeleteCart = () =>{
        cleanCart();
        setTotalDelCart(0);
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder({...order, buyer: formData});
        let prevOrder = {...order, buyer: formData};
        sendOrder(prevOrder);
    }
    const sendOrder = async(prevOrder) => {
        const orderFirebase = collection(database, 'Ordenes');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        console.log("orden generada: ", orderDoc.id)
        setFinishedOrder(orderDoc.id)
    }
    //useEffect
    useEffect(()=>{
        if(totalDelCart > 0){
            setHayProductos(true)
        }else{
            setHayProductos(false)
        }
    },[totalDelCart])
    return(
        <div>
            <h1>Carrito de compras</h1>
            {hayProductos?(
                    <div className="cartConteiner">
                        {cartProducts.map((product)=>{
                            return(
                                <div className="cartConteiner__item" key={nanoid()}>
                                    <div className='cartConteiner__item--img'>
                                        <img src={`/assets/images/${product.url}`} className="" alt="foto del producto"></img>
                                    </div>
                                    <div className='cartContiner__item__data'>
                                        <p>{product.description}</p>
                                        <p>Precio unitario: ${product.price}</p>
                                        <p>
                                            <Button onClick={()=>{handleOneLess(product.id)}}>-</Button>
                                            Cantidad: {product.cantidad}
                                            <Button onClick={()=>{handleOneMore(product, 1)}}>+</Button>
                                        </p>
                                        <p>Precio por cantidad (subtotal): ${product.price*product.cantidad}</p>
                                        <p>
                                            <Button onClick={()=>{handleDeleteItem(product.id)}}>Eliminar</Button>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            <Button onClick={()=>{handleDeleteCart()}}>Vaciar carrito</Button>
                        </div>
                        <div>
                            <p>Total: ${cartTotal()}</p>
                        </div>
                        <div>
                            <Button onClick={()=>{setOpenModal(true)}}>Completar Compra</Button>
                        </div>
                    </div>
                ):(
                    <div>
                        <p>Vaya parece que el carrito está está vacío</p>
                        <p>Que te parece hacer click en el siguiente botón para ver algo?</p>
                        <p>
                            <Link to={'/'}>
                                <Button>Volver a la tienda</Button>
                            </Link>
                        </p>
                    </div>
                )
            }
            <ModalBase handleClose={()=>setOpenModal(false)} open={openModal}>
                {finishedOrder?(
                    <div>
                        <h3>Su orden se generó correctamente</h3>
                        <p>Número de Orden: {finishedOrder}</p>
                        {/*
                            Pendiente:
                            Pulir estética
                            Al cerrar esto debería de limpiar el cart y volver al home
                        */}
                    </div>
                ):(
                    <div>
                        <h2>Formulario de Envio</h2>
                        <form onSubmit={handleSubmit}>
                            {/* <div>
                                <label for="inputNombre" class="form-label">Nombre/s</label>
                                <input type="text" class="form-control" id="inputNombre"
                                    placeholder="Ingrese su nombre o nombres" required/>
                            </div>
                            <div>
                                <label for="inputApellido" class="form-label">Apellido/s</label>
                                <input type="text" class="form-control" id="inputApellido"
                                    placeholder="Ingrese su apellido o apellidos" required/>
                            </div>
                            <div>
                                <label for="inputEdad" class="form-label">Edad</label>
                                <input type="number" class="form-control" id="inputEdad" placeholder="Ingrese su edad" required/>
                            </div>
                            <div>
                                <label for="inputDni" class="form-label">DNI</label>
                                <input type="number" class="form-control" id="inputDni" placeholder="Ingrese su DNI" required/>
                            </div> */}
                            <input type="text" name='name' placeholder='Nombre'
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono'
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='Mail'
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <div>
                                <Button type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                )}
            </ModalBase>
        </div>
    )
}


export default Cart;