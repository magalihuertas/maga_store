import React from 'react'
import { ItemList } from '../../components/ItemList';
import { getProductsJSON } from '../../utils/utils';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

export const ItemListContainer = () => {
    const { id } = useParams()
    console.log(id)
    const [productos, setProductos] = useState([]);
      useEffect(() => {
          const waitForData = async () => {
            let data = await getProductsJSON();
            console.log(data)
            if(id) data = data.filter(item=>item.categoria === id)
            setProductos(data)
          };
        setTimeout(() => {
          waitForData();
        },2000)   
  }, [id]);
      
    return (
        <div>
          <ItemList product={productos}/>
        </div>
    )
}