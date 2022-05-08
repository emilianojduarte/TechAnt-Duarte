//Components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from "formik";
import * as yup from 'yup';
//Firebase
import database from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
//Estilos
import './Contact.css';
//Yup
const validationSchema = yup.object(
    {
    name: yup
        .string('Ingrese su nombre')
        .min(3, 'Ingrese su nombre/s, mínimo 3 caracteres')
        .required('Información requerida'),
    surname: yup
        .string('Ingrese su apellido')
        .min(4, 'Ingrese su apellido/s, mínimo 4 caracteres')
        .required('Información requerida'),
    email: yup
        .string('Ingrese su email')
        .email('Ingrese una dirección de email válida')
        .required('Información requerida'),
    phone: yup
        .string('Ingrese su celular o número de contacto')
        .min(6, 'Ingrese un número de contacto válido')
        .required('Información requerida'),
    motive: yup
        .string('Ingrese una breve descripción del motivo de contacto')
        .min(10, 'Ingrese al menos 10 caracteres')
        .required('Información requerida'),
    }
);

function Contact () {
//Variables
    const [loadingContact, setLoadingContact] = useState(false);
    const [contactId, setContactId] = useState("");
//Funciones
    const [fechaDeHoy] = useState (() => {
        var fecha = new Date()
        var hoy = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
        return hoy
    })
    const formik = useFormik({
        initialValues: {
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const prevContact = {...values, date: fechaDeHoy};
            sendContact(prevContact);
        },
    });
    const sendContact = async(prevContact) => {
        setLoadingContact(true);
        const orderFirebase = collection(database, 'ConsultasYReclamos');
        const contactDoc = await addDoc(orderFirebase, prevContact);
        setContactId(contactDoc.id);
        setLoadingContact(false);
    }
//return
    return(
        <>
            <h1 id="titleContact">Formulario de Contacto</h1>
            <section className="" id="sectionMainContact">
                {loadingContact?(
                    <>
                        <h2>Procesando solicitud...</h2>
                        <p>
                            <CircularProgress sx={{ color: 'grey.800' }}/>
                        </p>
                    </>
                ):(
                    contactId?(
                        <div className='postMessage'>
                            <h3>Su consulta fue recibida correctamente</h3>
                            <p>Código de consulta: {contactId}</p>
                            <p>Recuerde revisar su correo, le estaremos respondiendo a la brevedad.</p>
                            <p>¡Muchas gracias por contactarnos!</p>
                            <p>
                                <Link to={'/'}>
                                    <Button>Volver a la tienda</Button>
                                </Link>
                            </p>
                        </div>
                    ):(
                        <>
                            <div>
                                <p>
                                    ¿Problemas? ¿Dudas? ¿Consutlas?
                                </p>
                                <p>
                                    No dudes en contactarnos, estamos para ayudarte a que tu experiencia en la tienda sea la mejor.
                                </p>
                            </div>
                            <form className="contacto" id="contacto" onSubmit={formik.handleSubmit}>
                                <div className="contacto_datosPersonales">
                                    <h2>Datos personales</h2>
                                    <TextField
                                        fullWidth
                                        color=""
                                        required
                                        margin="dense"
                                        id="name"
                                        name="name"
                                        label="Nombre/s"
                                        type="text"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        id="surname"
                                        name="surname"
                                        label="Apellido/s"
                                        type="text"
                                        value={formik.values.surname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                                        helperText={formik.touched.surname && formik.errors.surname}
                                    />
                                </div>
                                <div className="contacto_Contacto">
                                    <h2>Contacto</h2>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Correo electrónico"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        id="phone"
                                        name="phone"
                                        label="Teléfono"
                                        type="number"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                    />
                                </div>
                                <div className="contacto_Motivo">
                                    <h2>Motivo de contacto</h2>
                                    <TextField
                                        fullWidth
                                        id="motive"
                                        name="motive"
                                        label="Motivo del Contacto"
                                        type="text"
                                        multiline
                                        rows={3}
                                        value={formik.values.motive}
                                        onChange={formik.handleChange}
                                        error={formik.touched.motive && Boolean(formik.errors.motive)}
                                        helperText={formik.touched.motive && formik.errors.motive}
                                    />
                                </div>
                                <div className="contacto_BotonEnviar">
                                    <Button variant="contained" fullWidth type="submit">
                                        Enviar
                                    </Button>
                                </div>
                            </form>
                        </>
                    )
                )}
            </section>
        </>
    )
}

export default Contact;