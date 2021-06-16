import React from 'react'
import './estilos.css';
import { ContadorCard } from '../ContadorCard';
export const Cards = ({productData, greeting}) => {
    function agregarAlCarrito() {

    }
    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <p>{productData.marca}</p>
            <p>{productData.precio}</p>
            <ContadorCard stock={productData.stock}/>
            <p>{greeting}</p>


            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}

