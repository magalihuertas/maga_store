import React from 'react'
import './estilos.css';

export const Cards = ({productData, greeting}) => {
    function agregarAlCarrito() {

    }
    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <p>{productData.marca}</p>
            <p>{productData.precio}</p>
            <p>{greeting}</p>

            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}

