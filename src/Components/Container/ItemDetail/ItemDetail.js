import React, {useState, useContext} from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CartContext';

export const ItemDetail = ({ id, nombre, imagen, desc, precio, stock }) => {
  
    const [compra, setCompra] = useState(false)
    const {onAdd} = useContext(Context)

    const agregar = (props)=>{
        setCompra(true)
        onAdd({id, nombre, precio}, props.unidades)
    }

  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
<div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={imagen} className="w-full relative z-10" alt="{nombre}"/>
                    
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{nombre}</h1>
                    <p className="text-sm">{desc}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{precio}</span>
                    </div>
                    <div className="inline-block align-bottom">
                        
                        {!compra? <ItemCount stock={stock} onAdd = {agregar}/> : <Link to='/cart'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Terminar Compra</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  );
};
export default ItemDetail;