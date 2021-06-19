
import React from 'react'
import { ItemList } from '../../components/ItemList';
import { getProductsMeLi } from '../../utils/utils';
/* import { getProductsMeLi } from "../utils/const.jsx"; */
import { useEffect, useState } from "react";


export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
/*    const product = [
        { id: 1, nombre: "Unik Gatito 2 kilos", marca: "Unik Gato", precio: 10, stock:10 },
        { id: 2, nombre: "Unik Gatito 7,5 kilos", marca:"Unik Perro", precio: 20, stock:10 },
        { id: 3, nombre: "Unik Perro", marca:"Unik Perro", precio: 20, stock:10 }
      ];
 */
      useEffect(() => {
    
        const waitForData = async () => {
          let data = await getProductsMeLi("gato");
          let aux = data.map((element) => {
            return {
              nombre: element.title,
              imagen: element.thumbnail,
              precio: element.price,
              stock: element.available_quantity,
                        };
          });
          setProductos(aux);
        };
        waitForData();
      
  }, []);
      
    return (
        <div>
            <p>{greeting}</p>
            <ItemList product={productos}/>
       
        </div>
    )
}



