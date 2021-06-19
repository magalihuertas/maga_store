import React from 'react'
import './estilos.css';
import { ItemCount } from '../ItemCount';

export const Item = ({productData,onAdd,onSubstract}) => {
    function agregarAlCarrito() {

    }
    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <img src={productData.imagen}/>
            <p>{productData.precio}</p>
            
            <ItemCount stock={10} initial={1} onAdd={onAdd} onSubstract={onSubstract}/>
            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}