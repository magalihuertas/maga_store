import React from 'react'
import './estilos.css';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';

export const Item = ({productData,onAdd,onSubstract}) => {
    function agregarAlCarrito() {

    }
    return (
        <div className="card">
            <h1>{productData.nombre}</h1>
            <img src={productData.imagen} alt="imagen"/>
            <p>{productData.precio}</p>
            <ItemCount stock={productData.stock} initial={1} onAdd={onAdd} onSubstract={onSubstract}/>
            <Link to={`/item/${productData.id}`} className="btn btn-primary" >Ver más</Link>
            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    )
}
