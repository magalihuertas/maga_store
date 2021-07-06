import React, {useState} from 'react'

export const ItemCount = ({stock,onAdd}) => {
    
    const [initial, setContador]= useState(1)

    const sumar=() => {
        if(initial<stock){
            setContador(initial+1)
        }
    }
    const onSubstract=() =>{
        if(initial>1)
        setContador(initial-1)
    }

    return (
        <div>
            <button onClick={onSubstract}>-</button>
            <input type="text" value={initial}/>
            <button onClick={sumar}>+</button>
            <button onClick={()=> onAdd(initial)} >Agregar al Carrito</button>
        </div>
    )
}


