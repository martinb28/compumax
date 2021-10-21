import React from 'react'

const Item = ({nombre, desc, precio, imagen}) => {
    return(
        <div class=" flex flex-row flex-wrap max-w-lg mx-auto">
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img class="rounded-t-lg" src={imagen} alt = {nombre}/>
        
        <div class="p-5">
            
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{nombre}</h5>
            
            <p class="font-normal text-gray-700 mb-3">{desc}</p>
            <p class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" >
                ${precio}
            </p>
        </div>
    </div>
    
</div>
    )
}

export default Item;






