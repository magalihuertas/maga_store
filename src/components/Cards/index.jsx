import React from 'react'
import './estilos.css';

export const Cards = (props) => {
    function agregarAlCarrito(){

    }
    return (
        <div className="card">
            <h1>Título de la card</h1>
            <p>precio del producto</p>
            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}

