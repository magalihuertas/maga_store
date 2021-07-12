import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartContextComponent = ({children}) => {

    
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const addItem =(producto, cantidad) => {
        const index = cart.findIndex(item => item.id === producto.id) 
        if(index=== -1) setCart([...cart, {...producto, cantidad}])
        else {setCart(() => {
            cart[index].cantidad=cantidad
            return [...cart]
        })}
        }

    function clear(){
        setCart([])
      }

      function removeItem(id) {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
        
      }

    return (
        <CartContext.Provider value={{cart, addItem}} >
            {children}
        </CartContext.Provider>
            )
}
