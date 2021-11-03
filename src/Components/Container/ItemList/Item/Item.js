import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, imagen}) => {
    return(
            
                <div class="max-w-lg mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                                <img class="rounded-t-lg" src={imagen} alt = {nombre}/>        
                                <div class="p-5">            
                                        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{nombre}</h5>            
                                        <Link to={`/item/${id}`}>
                                                <p class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" >
                                                Ver Detalles
                                                </p>
                                        </Link>
                                </div>
                        </div>
                </div>
        
    )
}

export default Item;






