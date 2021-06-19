import React from 'react'
import { Item } from "../Item";

export const ItemList = ({product}) => {

    return (
        <div>
            <p>Profe Javi CRACK</p>
        
        {product.map((element) =>
        <Item productData ={element}/>
        
        )}
        </div>
    )
}


