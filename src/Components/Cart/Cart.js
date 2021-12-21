import React, {useContext} from "react";
import { Context } from "../context/CartContext";
import { Link } from 'react-router-dom';


const Cart = (props) =>{
    const {cart, unidades, total, quitarItem, vaciarCarro} = useContext(Context)
    
    return(
    <>
    <h1 className = 'font-sans text-2xl antialiased font-semibold'>Tu carrito acumuló un total de ${total} y tiene {unidades} unidad(es)</h1>
    {cart.map((item)=>
            <><div className="flex flex-col border bg-gray-50">
            <h2 className='font-semibold'>nombre:</h2> <h3 className='text-blue-500'>{item.nombre}</h3>
            <h2 className='font-semibold'>precio:</h2> <h3 className='text-blue-500'>${item.precio}</h3>
            <h2 className='font-semibold'>cantidad:</h2> <h3 className='text-blue-500'>{item.cantidad}</h3>
            <h2 className='font-semibold'>subtotal:</h2> <h3 className='text-blue-500'>${item.subtotal}</h3>
            <button onClick={() => quitarItem(item.id)} className='content-start font-semibold text-red-600'>Quitar objeto</button>

        </div></>
            )}
    {unidades ? <div><button className='content-start bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-500 rounded"' onClick={() => vaciarCarro()}> Vaciar carro</button></div> : <Link to="/"><button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">click aqui para volver al inicio</button></Link>}
    {unidades ? <Link to="/formBuy"><button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Finalizar compra</button></Link> : <div></div>}
    
    </>
    )
}

export default Cart