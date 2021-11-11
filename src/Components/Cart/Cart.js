import React, {useContext} from "react";
import { Context } from "../context/CartContext";

const Cart = () =>{

    const {cart, unidades, total} = useContext(Context)
    return(
    <>
    <p> tu carrito acumuló un total de ${total} y tiene {unidades} unidad(es)</p>
    {cart.map((item)=>
            <div>
                <h2>nombre:{item.nombre}</h2>
                <h2>precio:{item.precio}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:{item.subtotal}</h2>
                <button>{item.id}</button>
            </div>
            )}

    
        
    
    </>
    )
}

export default Cart