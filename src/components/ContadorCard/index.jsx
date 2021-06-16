import React, {useState} from 'react'

export const ContadorCard = ({stock}) => {
    
    const [contador, setContador]= useState(1)

    const sumar=() => {
        if(contador<stock){
            setContador(contador+1)
        }
    }
    const restar=() =>{
        if(contador>1)
        setContador(contador-1)
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <input type="text" value={contador}/>
            <button onClick={sumar}>+</button>
            
        </div>
    )
}


