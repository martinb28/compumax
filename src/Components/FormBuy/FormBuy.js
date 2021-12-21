import React, { useContext, useState } from 'react'
import { Context } from "../context/CartContext";
import  db from '../../lib/firebaseConfig';
import { collection, addDoc  } from 'firebase/firestore';
import NotyfContext from '../../NotyfContext';

export default function FormBuy() {

    const {cart, total, vaciarCarro} = useContext(Context)
    const [nombre, setNombre]=useState('')
    const [mail, setMail]=useState('')
    const [telefono, setTelefono]=useState('')
    const notyf = useContext(NotyfContext);
    

    const addPedido = async () => {               
        try {
            const docRef = await addDoc(collection(db, "ordenes"), {
                comprador: {
                    mail: mail,
                    nombre: nombre,
                    telefono: telefono
                },
                productos : cart,
                total: total

            });
            notyf.success( `Se ha registrado su compra bajo el ID: ${docRef.id} `);
            vaciarCarro()
          } catch (e) {
            console.error("Error: ", e);
          }
    }

    return (
        <div>
            <label className='font-semibold'>Nombre</label><br/>
            <input style={{'border':"1px solid black"}} type='text' onChange={(e)=>setNombre(e.target.value)} /><br/>
            <label className='font-semibold'>E-mail</label><br/>
            <input style={{'border':"1px solid black"}} type='email' onChange={(e)=>setMail(e.target.value)} /><br/>
            <label className='font-semibold'>Telefono</label><br/>
            <input style={{'border':"1px solid black"}} type='tel' onChange={(e)=>setTelefono(e.target.value)} /><br/><br/>
            <button onClick={addPedido} className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Finalizar compra</button>
        </div>
    )
}
