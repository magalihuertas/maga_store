import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CheckOut from '../CheckOut';

export const CartComponent = () => {
    
    const {cart, clear, removeItem, subTotal} = useContext(CartContext);
 
    return (
        cart.length ? 
            <div>
                {cart.map(producto=>{
                return (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.precio * producto.cantidad}</p>
                    <p>{producto.cantidad}</p>
                    <img src={producto.imagen} alt="productoNombre"/>
                    <button onClick={()=>removeItem(producto.id)}>X</button>
            </div>
            )
        })}

        <CheckOut/>

            <div>{subTotal()}</div>
            <button onClick={clear}>Vaciar Carrito</button>
            </div>
            :
            <div><Link to="/">Seguir comprando </Link></div>
    )
    }