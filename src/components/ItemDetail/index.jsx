import React from 'react'

export const ItemDetail = ({productos}) => {
   
    return (
        <div>
          <p>{productos.nombre}</p>
            <img src={productos.imagen} alt={productos.nombre}/>
            <p>{productos.precio}</p>
            <p>{productos.stock}</p>
            <p>{productos.descripcion}</p> 
        </div>
    )
}




