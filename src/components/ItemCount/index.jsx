import React, {useState} from 'react'

export const ItemCount = ({stock}) => {
    
    const [initial, setContador]= useState(1)

    const onAdd=() => {
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
            <button onClick={onAdd}>+</button>
            
        </div>
    )
}


