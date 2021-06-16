
import React from 'react'
import { Cards } from "../../components/Cards";

export const ItemListContainer = ({productlist}) => {
    return (
        <div>
        <Cards productData ={productlist[0]} greeting={"Bienvenidos a la tienda"}/>
        <Cards productData ={productlist[1]}/>
        </div>
    )
}



