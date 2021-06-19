import React from 'react'
import './estilos.css';
import { ItemCount } from '../ItemCount';

export const Cards = ({productData, greeting,onAdd,onSubstract}) => {
    function agregarAlCarrito() {

    }
    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <p>{productData.marca}</p>
            <p>{productData.precio}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd} onSubstract={onSubstract}/>
            <p>{greeting}</p>
            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}

