import React,{useState, useEffect} from "react";
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () =>{
    let mockProducts = [
        {
            id: 1,
            type: "ram",
            url: "./assets/images/ram1.jpg",
            enviogratis: false,
            recomendado: true,
            price: 3500,
            stock: 12,
            description: "1x4GB Kingston ValueRAM DDR3"
        },
        {
            id: 2,
            type: "ram",
            url: "./assets/images/ram2.jpg",
            enviogratis: true,
            recomendado: false,
            price: 5499,
            stock: 15,
            description: "1x8GB Kingston Fury DDR4"
        },
        {
            id: 3,
            type: "ram",
            url: "./assets/images/ram3.jpg",
            enviogratis: true,
            recomendado: true,
            price: 16108,
            stock: 16,
            description: "2x16GB Kingston Fury Beast DDR4"
        },
        {
            id: 4,
            type: "cpuintel",
            url: "./assets/images/i3.jpg",
            enviogratis: true,
            recomendado: true,
            price: 26950,
            stock: 7,
            description: "10ma Generación Intel i3"
        },
        {
            id: 5,
            type: "cpuintel",
            url: "./assets/images/i5.jpg",
            enviogratis: true,
            recomendado: true,
            price: 24999,
            stock: 8,
            description: "10ma Generación Intel i5"
        },
        {
            id: 6,
            type: "cpuintel",
            url: "./assets/images/i7.jpg",
            enviogratis: false,
            recomendado: true,
            price: 43399,
            stock: 5,
            description: "10ma Generación Intel i7"
        },
        {
            id: 7,
            type: "cpuintel",
            url: "./assets/images/i7.jpg",
            enviogratis: true,
            recomendado: false,
            price: 55900,
            stock: 3,
            description: "10ma Generación Intel i9"
        },
        {
            id: 8,
            type: "cpuamd",
            url: "./assets/images/r3.jpg",
            enviogratis: true,
            recomendado: false,
            price: 32662,
            stock: 10,
            description: "3ra Generación Ryzen 3"
        },
        {
            id: 9,
            type: "cpuamd",
            url: "./assets/images/r5.jpg",
            enviogratis: false,
            recomendado: true,
            price: 41999,
            stock: 9,
            description: "3ra Generación Ryzen 5"
        },
        {
            id: 10,
            type: "cpuamd",
            "url": "./assets/images/r7.jpg",
            "enviogratis": true,
            "recomendado": true,
            "price": 61722,
            stock: 8,
            "description": "3ra Generación Ryzen 7"
        },
        {
            id: 11,
            type: "cpuamd",
            url: "./assets/images/r9.jpg",
            enviogratis: true,
            recomendado: false,
            price: 77400,
            stock: 7,
            description: "3ra Generación Ryzen 9"
        }
    ];
    //Estado para los productos
    const [products, setProducts] = useState([]);
    //Promesa para obtener los productos
    async function getProducts () {
        try{ 
            setTimeout(()=>{
                return;
            }, 2000)
            return (mockProducts);
        }
        catch(error){
            console.log("Error en los datos");
        }
    }
    //Efecto de montaje para obteneter el listado de productos
    useEffect(()=>{
        getProducts().then((dataproductos)=>{
            setProducts(dataproductos)
        }).finally(()=>{
            console.log("Terminó la llamada correctamente")
        })
    },[])
    //return JSX
    return(
        <div className="cardsConteiner">
            {products.map((product)=>{
                return(
                    <Item data={product} key={product.id}/>
                )
            })}
        </div>
    )
}

export default ItemList;