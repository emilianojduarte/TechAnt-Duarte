//Componentes
import React,{useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';
import ModalBase from '../Modal/ModalBase';
//Context
import CartContext from '../../context/CartContext';
//Firebase
import database from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
//Estilos
import './Cart.css';


function Cart () {
//VARIABLES
    //Contexto
    const {cartProducts, cartTotal, restarUno, addProductToCart, removeItem, cleanCart} = useContext(CartContext);
    const navigate = useNavigate();
    const [hayProductos, setHayProductos] = useState(false);
    const [totalDelCart, setTotalDelCart] = useState(cartTotal);
    const [openModal, setOpenModal] = useState(false);
    const [finishedOrder, setFinishedOrder] = useState();
    const [loadingOrder, setLoadingOrder] = useState(true);
    const [fechaDeHoy] = useState (() => {
        var fecha = new Date()
        var hoy = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
        return hoy
    })
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct)=>{
                return{
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            date : fechaDeHoy,
            total: cartTotal()
        }
    );
//FUNCIONES
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
    const handleClose = () =>{
        if(finishedOrder){
            cleanCart();
            navigate('/');
        }else{
            setOpenModal(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder({...order, buyer: formData});
        let prevOrder = {...order, buyer: formData};
        sendOrder(prevOrder);
    }
    const sendOrder = async(prevOrder) => {
        setLoadingOrder(false);
        const orderFirebase = collection(database, 'Ordenes');
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        console.log("orden generada: ", orderDoc.id)
        setFinishedOrder(orderDoc.id)
        setLoadingOrder(true);
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
                                        <div className='cartContiner__item__data--title'>{product.title}</div>
                                        <div className='cartContiner__item__data--uprice'>Precio unitario: ${product.price}</div>
                                        <div className='cartContiner__item__data--quantity'>
                                            <Button onClick={()=>{handleOneLess(product.id)}}>-</Button>
                                            Cantidad: {product.cantidad}
                                            <Button onClick={()=>{handleOneMore(product, 1)}}>+</Button>
                                        </div>
                                        <div className='cartContiner__item__data--subprice'>Subtotal: ${product.price*product.cantidad}</div>
                                        <div className='cartContiner__item__data--delete'>
                                            <Button onClick={()=>{handleDeleteItem(product.id)}}>Eliminar</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='cartConteiner__controls'>
                            <div>
                                <Button onClick={()=>{handleDeleteCart()}}>Vaciar carrito</Button>
                            </div>
                            <div>
                                <p>TOTAL ${cartTotal()}</p>
                            </div>
                            <div>
                                <Button onClick={()=>{setOpenModal(true)}}>Completar Compra</Button>
                            </div>
                        </div>
                    </div>
                ):(
                    <div>
                        <p>Vaya parece que el carrito está está vacío.</p>
                        <p>Que te parece hacer click en el siguiente botón para ver algo?</p>
                        <p>
                            <Link to={'/'}>
                                <Button>Volver a la tienda</Button>
                            </Link>
                        </p>
                    </div>
                )
            }
            <ModalBase handleClose={()=>handleClose()} open={openModal}>
                {finishedOrder?(
                    <div className='postMessage'>
                        <h3>Su orden se generó correctamente</h3>
                        <p>Número de orden: {finishedOrder}</p>
                        <p>Recuerde revisar su correo para seguir las indicaciones y coordinar la entrega.</p>
                        <p>¡Muchas gracias por su compra!</p>
                        <p>Presione fuera de esta ventana para volver al inicio.</p>
                    </div>
                ):(loadingOrder?(
                    <div>
                        <h2>Formulario de Envio</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre/s</label>
                                <input type="text" name='name' placeholder='Ingrese su nombre o nombres'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>
                            <div>
                                <label>Apellido/s</label>
                                <input type="text" name='surname' placeholder='Ingrese su apellido o apellidos'
                                    onChange={handleChange}
                                    value={formData.surname}
                                />
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="number" name='phone' placeholder='Ingrese su teléfono de contacto'
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="mail" name='email' placeholder='Ingrese la dirección  de correo'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div>
                                <Button type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                    
                ):(
                    <h2>Procesando solicitud...</h2>
                )
                )}
            </ModalBase>
        </div>
    )
}


export default Cart;