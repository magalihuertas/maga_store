
import React from 'react'
import { ItemList } from '../../components/ItemList';


export const ItemListContainer = ({greeting}) => {

    const product = [
        { id: 1, nombre: "Unik Gatito 2 kilos", marca: "Unik Gato", precio: 10, stock:10 },
        { id: 2, nombre: "Unik Gatito 7,5 kilos", marca:"Unik Perro", precio: 20, stock:10 },
        { id: 3, nombre: "Unik Perro", marca:"Unik Perro", precio: 20, stock:10 }
      ];

    return (
        <div>
            <p>{greeting}</p>
            <ItemList product={product}/>

        
        </div>
    )
}



