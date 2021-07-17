import React from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import { useEffect, useState, useContext } from "react";
import { useParams} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
    const {productos} = useContext(CartContext)
    const { id } = useParams();
    const [item, setItem] = useState(null)
console.log(productos, item)
    useEffect(()=>{
      if(productos){
          const itemFound = productos.docs.find(producto=>producto.data().id == id)
          setItem(itemFound)
      }
  },[id, productos])
      
    return (
        <div>
           {item && <ItemDetail productos={item.data()}/>}
        </div>
    )
}