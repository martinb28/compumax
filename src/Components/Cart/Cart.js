import React, {useContext} from "react";
import { Context } from "../context/CartContext";

const Cart = (props) =>{

    const {cart, unidades, total, quitarItem, vaciarCarro} = useContext(Context)
    return(
    <>
    <p> tu carrito acumuló un total de ${total} y tiene {unidades} unidad(es)</p>
    {cart.map((item)=>
            <><div className="flex flex-col border bg-gray-50">
            <h2 className='font-semibold'>nombre:</h2> <h3 className='text-blue-500'>{item.nombre}</h3>
            <h2 className='font-semibold'>precio:</h2> <h3 className='text-blue-500'>${item.precio}</h3>
            <h2 className='font-semibold'>cantidad:</h2> <h3 className='text-blue-500'>{item.cantidad}</h3>
            <h2 className='font-semibold'>subtotal:</h2> <h3 className='text-blue-500'>${item.subtotal}</h3>
            <button onClick={() => quitarItem(item.id)} className='content-start font-semibold text-red-600'>Quitar objeto</button>

        </div><div><button className='content-start' onClick={() => vaciarCarro()}> Vaciar carro</button></div></>
            )}
    </>
    )
}

export default Cart