//Componentes
import React, { useEffect, useState } from "react";
import ModalBase from '../Modal/ModalBase';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
//Estilos
import './UserWidget.css';

function UserWidget () {
//variables
const [user, setUser] = useState();
const [logueado, setLogueado] = useState(false);
const [openModal, setOpenModal] = useState(false);
const [loading, setLoading] = useState(false);
const [errorUser, setErrorUser] = useState(false);
const [formData, setFormData] = useState({
    email: '',
    password: ''
})
//funciones
const isLoged = () => {
    if (localStorage.getItem("token")) {
        setLogueado(true);
        var nombre = localStorage.getItem("email").split("@")[0];
        setUser(nombre);
    }
}
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}
const enviarDatos = async (url = "", data = {}) => {
    setLoading(true);
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
    });
    return response.json();
};
const handleLogIn = async (e) =>{
    e.preventDefault();
    const resultPetition = await enviarDatos("https://reqres.in/api/login", formData);
    setLoading(false);
    if (!!resultPetition.token) {
        setLogueado(true)
        localStorage.setItem("token", resultPetition.token);
        localStorage.setItem("email", formData.email);
        //Las 2 lineas siguientes son para que luego de loguearme correctamente
        //no requiera refrescar la página para que se me actualice el nombre
        var nombre = localStorage.getItem("email").split("@")[0];
        setUser(nombre);
        setOpenModal(false)
    } else {
            setErrorUser(true)
        }
}
const handleLogOff = () => {
    localStorage.clear();
    setLogueado(false);
    setOpenModal(false);
}
//useEffect
useEffect(()=>{
    isLoged();
},[])
//return
    return(
        <>
            {logueado?(
                <div onClick={()=>{setOpenModal(true)}}>
                    <PersonIcon/>
                    <span>{user}</span>
                </div>
            ):(
                <div onClick={()=>{setOpenModal(true)}}>
                    <PersonIcon/>
                    <span>Log In</span>
                </div>
            )}
            <ModalBase handleClose={()=>setOpenModal(false)} open={openModal}>
                {logueado?(
                    <form className="formUser">
                        <div className="modal__container">
                            <div>
                                <p>Para cerrar su sesión presione el botón salir</p>
                                <Button onClick={handleLogOff} id="btnLogin">Salir</Button>
                            </div>
                            
                        </div>
                    </form>
                ):(
                    <form onSubmit={handleLogIn} className="formUser">
                        <div className="modal__container">
                            <div>
                                <label>Usuario (correo)</label>
                                <input type="email" className="modal__container--inputText" id="loginForm--email"
                                    placeholder="Ingrese su usuario (email) . . ."
                                    autoComplete="off"
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input type="password" className="modal__container--inputPassword" id="loginForm--pass"
                                    placeholder="Ingrese su contraseña . . ."
                                    autoComplete="off"
                                    required
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                            </div>
                            <div id="loginForm--error">
                                {errorUser?(
                                    <p>Correo o contraseña incorrecto</p>
                                ):(
                                    <p></p>
                                )}
                            </div>
                            <div>
                                <Button type="submit" id="btnLogin">
                                    {loading?(
                                        <span>
                                            <CircularProgress sx={{ color: 'grey.800', size: '1em',}}/>
                                        </span>
                                    ):(
                                        <span>Ingresar</span>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </ModalBase>
        </>
    )
}
export default UserWidget;