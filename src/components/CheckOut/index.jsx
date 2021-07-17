import { useContext } from 'react'
import firebase from "firebase/app";
import { db } from '../../firebaseConfig'
import { CartContext } from '../../context/CartContext'

const CheckOut = () => {
    const {cart, subTotal, clear} = useContext(CartContext);

    async function itemsAActualizar() { 
        const itemsToUpdate = db.collection("productos")
        .where("id", "in", cart.map(i => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();
        const outOfStock = [];

        cart.forEach(producto => {
            const item = query.docs.find(item => producto.id === item.data().id);
            if (item.data().stock >= producto.cantidad) {
                batch.update(item.ref, {stock: item.data().stock - producto.cantidad});
            } else{
                outOfStock.push(producto)};
        })

            if (outOfStock.length === 0){
            await batch.commit();
            return {status: 'ok'}
        } else {
            return {status: 'sin stock', outOfStock}
        }
    }

    const finalizarCompra = async (comprador) => {
        const orden = {
            comprador,
            items: cart,
            total: subTotal(),
            fecha: firebase.firestore.FieldValue.serverTimestamp()
        }

        const respuesta = await db.collection('orders').add(orden);
        return respuesta
    }

    const obtenerComprador = async (e) => {
        e.preventDefault();

        const formulario = e.target;

        const comprador = {
            nombre: formulario['nombre'].value,
            telefono: formulario['telefono'].value,
            email: formulario['email'].value,
        }
        const respuesta = await itemsAActualizar();
        if (respuesta.status === "ok"){
            await finalizarCompra(comprador);
        
        formulario.reset();
        clear();
        }
        else{
            alert(respuesta.status);
        }
    }

    return (
        <form onSubmit={(e)=>obtenerComprador(e)}>
            <input type="text" name="nombre" placeholder="Nombre"/>
            <input type="tel" name="telefono" placeholder="111-123345"/>
            <input type="email" name="email" placeholder="email@mail.com"/>
            <input type="submit" value="FinalizarCompra" />
        </form>
    )
}

export default CheckOut