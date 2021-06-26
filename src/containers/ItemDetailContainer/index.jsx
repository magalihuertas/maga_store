import React from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import { getProductsMeLi } from '../../utils/utils';
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState();
      useEffect(() => {
    
        const waitForData = async () => {
          let data = await getProductsMeLi("gato");
          let aux = data.map((element) => {
            return {
              nombre: element.title,
              imagen: element.thumbnail,
              precio: element.price,
              stock: element.available_quantity,
              descripcion: "Gatos sphinx, vacunados , desparacitados. Esterilizados con registro y con garantia sanitaria escrita . ."
                    };
          });
            setTimeout(() => {
            setProductos(aux[3]);
          }
          ,2000)
                 };
        waitForData();
      
  }, []);
      
    return (
        <div>
           {productos && <ItemDetail productos={productos}/>}
        </div>
    )
}